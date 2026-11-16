/**
 * Small in-memory token bucket per client key.
 * Good enough for a portfolio on a single serverless region; swap for Upstash Redis if traffic grows.
 * Note: serverless instances don't share memory, so this is a soft limit, not a hard one.
 */
type Bucket = { tokens: number; updated: number };
const buckets = new Map<string, Bucket>();

const CAPACITY = 20; // messages
const REFILL_PER_MS = 20 / (60 * 60 * 1000); // 20 per hour

export function allow(key: string): { ok: boolean; remaining: number } {
  const now = Date.now();
  const b = buckets.get(key) ?? { tokens: CAPACITY, updated: now };
  b.tokens = Math.min(CAPACITY, b.tokens + (now - b.updated) * REFILL_PER_MS);
  b.updated = now;
  if (b.tokens < 1) {
    buckets.set(key, b);
    return { ok: false, remaining: 0 };
  }
  b.tokens -= 1;
  buckets.set(key, b);
  // keep the map small
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (now - v.updated > 3600_000) buckets.delete(k);
  }
  return { ok: true, remaining: Math.floor(b.tokens) };
}
