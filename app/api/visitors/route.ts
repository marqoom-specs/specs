import { getCloudflareContext } from '@opennextjs/cloudflare';
import { codes } from '@/lib/visitor-survey';

// The part of D1's binding this route uses.
type Database = { prepare(query: string): { bind(...values: unknown[]): { run(): Promise<unknown> } } };

// Each answer arrives as it is given, so a visitor who stops after one question still counts.
const upsert = `INSERT INTO visitor_answers (id, lang, page, surface, role, data, intent, booking_opened)
VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)
ON CONFLICT(id) DO UPDATE SET
  role = COALESCE(excluded.role, role),
  data = COALESCE(excluded.data, data),
  intent = COALESCE(excluded.intent, intent),
  booking_opened = MAX(booking_opened, excluded.booking_opened),
  updated_at = datetime('now')`;

const one = (value: unknown, allowed: string[]) => (typeof value === 'string' && allowed.includes(value) ? value : null);

export async function POST(request: Request) {
  const body: Record<string, unknown> | null = await request.json().catch(() => null);
  const id = typeof body?.id === 'string' && /^[0-9a-f-]{36}$/.test(body.id) ? body.id : null;
  const lang = one(body?.lang, ['en', 'ar']);
  const surface = one(body?.surface, ['sheet', 'card']);
  const page = typeof body?.page === 'string' && body.page.startsWith('/') ? body.page.slice(0, 200) : null;
  const data = Array.isArray(body?.data) && body.data.length > 0 && body.data.every((code) => codes.data.includes(code))
    ? [...new Set(body.data as string[])].join(',')
    : null;
  if (!body || !id || !lang || !surface || !page || (body.data !== undefined && !data)) {
    return Response.json({ error: 'Invalid answer' }, { status: 400 });
  }

  const { env } = await getCloudflareContext({ async: true });
  const db = (env as { DB?: Database }).DB;
  if (!db) return Response.json({ error: 'Answers are not stored here' }, { status: 503 });
  await db
    .prepare(upsert)
    .bind(id, lang, page, surface, one(body.role, codes.role), data, one(body.intent, codes.intent), body.booking === true ? 1 : 0)
    .run();
  return new Response(null, { status: 204 });
}
