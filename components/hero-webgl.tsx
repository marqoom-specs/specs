'use client';

import { useEffect, useRef } from 'react';

// Ink and gold leaf: the palette of an inscribed page, in both themes.
const palettes = {
  dark: {
    surface: '#08090a',
    strands: ['#f7f8f8', '#8a8f98', '#d8b676', '#f7f8f8'],
    dots: '#f7f8f8',
    dotOpacity: 0.22,
    grain: 0.035,
  },
  light: {
    surface: '#fcfcfd',
    strands: ['#1c1d21', '#60646c', '#b3873a', '#1c1d21'],
    dots: '#1c1d21',
    dotOpacity: 0.12,
    grain: 0.02,
  },
};

const vertex = `#version 300 es
in vec2 corner;
void main() {
  gl_Position = vec4(corner, 0.0, 1.0);
}`;

const fragment = `#version 300 es
precision highp float;

uniform vec2 size;
uniform float time;
uniform float mirror;
uniform int variant;
uniform vec3 surface;
uniform vec3 stops[4];
uniform vec3 dots;
uniform float dotOpacity;
uniform float grain;
out vec4 color;

const float TAU = 6.2831853;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 ramp(float t) {
  t = fract(t) * 3.0;
  vec3 a = mix(stops[0], stops[1], clamp(t, 0.0, 1.0));
  a = mix(a, stops[2], clamp(t - 1.0, 0.0, 1.0));
  return mix(a, stops[3], clamp(t - 2.0, 0.0, 1.0));
}

vec2 place(vec2 pixel) {
  vec2 uv = pixel / size;
  uv.y = 1.0 - uv.y;
  uv.x = mix(uv.x, 1.0 - uv.x, mirror);
  return uv;
}

// Lines of text carried as a recited, continuous flow: its colour, and how much of it covers the point.
vec4 flow(vec2 uv) {
  vec4 total = vec4(0.0);
  for (int i = 0; i < 5; i++) {
    float n = float(i);
    float phase = n * 0.37;
    float line = mix(0.46, 0.12, uv.x) + (n / 4.0 - 0.5) * 0.2 * (0.35 + uv.x);
    line += 0.075 * sin(TAU * (0.62 * uv.x + phase) + time * 0.34);
    line += 0.04 * sin(TAU * (1.1 * uv.x - phase * 1.7) - time * 0.21);
    // A ribbon turning in space: it narrows to an edge and opens again.
    float turn = 0.5 + 0.5 * sin(TAU * (0.45 * uv.x + phase * 2.3) + time * 0.27);
    float width = mix(0.004, 0.034, turn);
    float soft = 0.012 + 0.03 * (1.0 - turn);
    float body = 1.0 - smoothstep(width, width + soft, abs(uv.y - line));
    float sheen = 0.72 + 0.28 * cos((uv.y - line) / (width + soft) * 2.4);
    vec3 tint = ramp(uv.x * 0.8 + n * 0.23 + time * 0.03);
    float cover = body * (0.9 - n * 0.06);
    total = total * (1.0 - cover) + vec4(mix(surface, tint, sheen), 1.0) * cover;
  }
  return total;
}

vec3 over(vec4 layer) {
  return surface * (1.0 - layer.a) + layer.rgb;
}

vec3 tone(vec4 layer) {
  return layer.rgb / max(layer.a, 0.001);
}

// What the flow is seen through.
vec3 treat(vec2 uv) {
  vec2 pixel = gl_FragCoord.xy;

  if (variant == 1) {
    // Halftone: dots on a turned grid, sized by coverage.
    mat2 turned = mat2(0.866, -0.5, 0.5, 0.866);
    vec2 grid = turned * pixel;
    vec2 centre = (floor(grid / 7.0) + 0.5) * 7.0;
    vec4 layer = flow(place(transpose(turned) * centre));
    float radius = 0.62 * sqrt(layer.a);
    float ink = 1.0 - smoothstep(radius - 0.08, radius + 0.08, length(grid - centre) / 7.0);
    return mix(surface, tone(layer), ink * step(0.02, layer.a));
  }
  return over(flow(uv));
}

void main() {
  vec2 uv = place(gl_FragCoord.xy);
  vec3 result = treat(uv);

  vec2 cell = vec2(uv.x * size.x / size.y, uv.y) * 34.0;
  float mark = 1.0 - smoothstep(0.05, 0.08, length(fract(cell) - 0.5));
  float twinkle = 0.55 + 0.45 * sin(time * 1.3 + hash(floor(cell)) * TAU);
  result = mix(result, dots, mark * dotOpacity * twinkle);

  result += (hash(gl_FragCoord.xy) - 0.5) * grain;
  color = vec4(result, 1.0);
}`;

// The order is the shader's: a variant's index is its number there.
export const heroVariants = ['silk', 'halftone'] as const;
export type HeroVariant = (typeof heroVariants)[number];

function rgb(hex: string) {
  return [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16) / 255);
}

export default function HeroWebgl({
  theme,
  still,
  rtl,
  variant = 'silk',
  onReady,
  onUnavailable,
}: {
  theme: 'dark' | 'light';
  still: boolean;
  rtl: boolean;
  variant?: HeroVariant;
  onReady: () => void;
  onUnavailable?: () => void;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const callbacks = useRef({ onReady, onUnavailable });
  callbacks.current = { onReady, onUnavailable };

  useEffect(() => {
    const element = canvas.current;
    const gl = element?.getContext('webgl2', { antialias: false });
    if (!element || !gl) {
      callbacks.current.onUnavailable?.();
      return;
    }

    const program = gl.createProgram();
    for (const [type, source] of [
      [gl.VERTEX_SHADER, vertex],
      [gl.FRAGMENT_SHADER, fragment],
    ] as const) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      gl.attachShader(program, shader);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      callbacks.current.onUnavailable?.();
      return;
    }
    gl.useProgram(program);

    // One triangle that covers the canvas.
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const corner = gl.getAttribLocation(program, 'corner');
    gl.enableVertexAttribArray(corner);
    gl.vertexAttribPointer(corner, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const palette = palettes[theme];
    gl.uniform3fv(uniform('surface'), rgb(palette.surface));
    gl.uniform3fv(uniform('stops'), palette.strands.flatMap(rgb));
    gl.uniform3fv(uniform('dots'), rgb(palette.dots));
    gl.uniform1f(uniform('dotOpacity'), palette.dotOpacity);
    gl.uniform1f(uniform('grain'), palette.grain);
    gl.uniform1f(uniform('mirror'), rtl ? 1 : 0);
    gl.uniform1i(uniform('variant'), heroVariants.indexOf(variant));
    const size = uniform('size');
    const time = uniform('time');

    let frame = 0;
    let visible = true;
    let announced = false;
    // A fixed moment, so the still frame is the same on every visit.
    const draw = (now: number) => {
      const scale = Math.min(window.devicePixelRatio, 2);
      const width = Math.round(element.clientWidth * scale);
      const height = Math.round(element.clientHeight * scale);
      if (element.width !== width || element.height !== height) {
        element.width = width;
        element.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform2f(size, width, height);
      gl.uniform1f(time, still ? 12 : now / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!announced) {
        announced = true;
        callbacks.current.onReady();
      }
      if (!still && visible) frame = requestAnimationFrame(draw);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    const resized = new ResizeObserver(start);
    resized.observe(element);
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    seen.observe(element);
    start();

    return () => {
      cancelAnimationFrame(frame);
      resized.disconnect();
      seen.disconnect();
      // The context stays with the canvas, which React may hand back to this effect.
      gl.deleteProgram(program);
    };
  }, [theme, still, rtl, variant]);

  return <canvas ref={canvas} className="marqoom-hero-canvas" />;
}
