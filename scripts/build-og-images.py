"""Draws the link-preview image (Open Graph) in Arabic and English into public/og/.

The image is the hero's own flow, drawn by its WebGL shader, behind the Monolith mark, the site's
title and the terminology standard's version. Everything is read from the files the site uses, so
rerun this after the hero or the version changes. Needs Chromium.
"""

import re
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 1200, 630

hero = (ROOT / 'components/hero-webgl.tsx').read_text()
vertex = re.search(r'const vertex = `(.*?)`;', hero, re.S)[1]
fragment = re.search(r'const fragment = `(.*?)`;', hero, re.S)[1]
version = re.search(r"terminologyVersion = '([^']+)'", (ROOT / 'lib/versions.ts').read_text())[1]

copy = {
    'ar': {
        'brand': 'مرقوم',
        'title': 'معايير البيانات القرآنية',
        'size': '78px',
        'spacing': '0',
    },
    'en': {
        'brand': 'Marqoom',
        'title': 'Quranic data standards',
        'size': '72px',
        'spacing': '-0.02em',
    },
}


def page(lang):
    ar = lang == 'ar'
    text = copy[lang]
    font = lambda weight, name: f"@font-face {{ font-family: T; src: url({(ROOT / 'app/fonts' / name).as_uri()}); font-weight: {weight}; }}"
    return f"""<!doctype html>
<html lang="{lang}" dir="{'rtl' if ar else 'ltr'}">
<head><meta charset="utf-8">
<style>
{font(400, 'thmanyahsans-Regular.woff2')}
{font(500, 'thmanyahsans-Medium.woff2')}
{font(700, 'thmanyahsans-Bold.woff2')}
html, body {{ margin: 0; width: {WIDTH}px; height: {HEIGHT}px; overflow: hidden; background: #08090a; }}
canvas {{ position: absolute; inset: 0; width: {WIDTH}px; height: {HEIGHT}px; }}
/* The flow stays behind the copy, darkest where the text sits. */
.shade {{ position: absolute; inset: 0; background: linear-gradient({'to left' if ar else 'to right'}, #08090a 22%, rgba(8,9,10,.78) 52%, rgba(8,9,10,.15) 100%); }}
.copy {{ position: absolute; inset: 0; padding: 72px 80px; display: flex; flex-direction: column; justify-content: space-between; font-family: T; color: #f7f8f8; }}
.brand {{ display: flex; align-items: center; gap: 18px; font-size: 38px; font-weight: 700; }}
.brand img {{ width: 64px; height: 64px; }}
h1 {{ margin: 0; font-size: {text['size']}; line-height: 1.15; font-weight: 700; letter-spacing: {text['spacing']}; max-width: 1000px; }}
p {{ margin: 26px 0 0; }}
.tag {{ display: inline-block; padding: 2px 16px; border: 1.5px solid #d8b676; border-radius: 999px; color: #d8b676; font-size: 26px; font-weight: 500; }}
</style></head>
<body>
<canvas id="flow" width="{WIDTH}" height="{HEIGHT}"></canvas>
<div class="shade"></div>
<div class="copy">
  <div class="brand"><img src="{(ROOT / 'public/brand/monolith.png').as_uri()}" alt="">{text['brand']}</div>
  <div><h1>{text['title']}</h1><p><span class="tag"><bdi>{version}</bdi></span></p></div>
</div>
<script>
// The hero's dark palette and its still frame (components/hero-webgl.tsx), mirrored in Arabic as on the site.
const vertex = `{vertex}`;
const fragment = `{fragment}`;
const rgb = (hex) => [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16) / 255);
const gl = document.getElementById('flow').getContext('webgl2', {{ antialias: false, preserveDrawingBuffer: true }});
const program = gl.createProgram();
for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]]) {{
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  gl.attachShader(program, shader);
}}
gl.linkProgram(program);
gl.useProgram(program);
gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
const corner = gl.getAttribLocation(program, 'corner');
gl.enableVertexAttribArray(corner);
gl.vertexAttribPointer(corner, 2, gl.FLOAT, false, 0, 0);
const uniform = (name) => gl.getUniformLocation(program, name);
gl.uniform3fv(uniform('surface'), rgb('#08090a'));
gl.uniform3fv(uniform('stops'), ['#f7f8f8', '#8a8f98', '#d8b676', '#f7f8f8'].flatMap(rgb));
gl.uniform3fv(uniform('dots'), rgb('#f7f8f8'));
gl.uniform1f(uniform('dotOpacity'), 0.22);
gl.uniform1f(uniform('grain'), 0.035);
gl.uniform1f(uniform('mirror'), {1 if ar else 0});
gl.uniform1i(uniform('variant'), 0);
gl.uniform2f(uniform('size'), {WIDTH}, {HEIGHT});
gl.uniform1f(uniform('time'), 12);
gl.viewport(0, 0, {WIDTH}, {HEIGHT});
gl.drawArrays(gl.TRIANGLES, 0, 3);
</script>
</body></html>"""


out = ROOT / 'public/og'
out.mkdir(exist_ok=True)
with tempfile.TemporaryDirectory() as work:
    for lang in copy:
        html = Path(work) / f'{lang}.html'
        html.write_text(page(lang))
        target = out / f'{lang}.jpeg'
        subprocess.run([
            'chromium', '--headless=new', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
            '--hide-scrollbars', '--allow-file-access-from-files', f'--window-size={WIDTH},{HEIGHT}',
            '--virtual-time-budget=4000', f'--screenshot={target}', html.as_uri(),
        ], check=True, capture_output=True)
        print(f'Drew {target.relative_to(ROOT)} ({target.stat().st_size // 1024} KB)')
