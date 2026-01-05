import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';

if (!process.env.GH_TOKEN) {
  throw new Error('GH_TOKEN environment variable is required. Run with: npx env-cmd -f .env <cmd>');
}

const CACHE_DIR = '.cache';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

function getCachePath(key: string): string {
  const hash = createHash('md5').update(key).digest('hex');
  return `${CACHE_DIR}/${hash}.json`;
}

export async function cachedFetch(url: string): Promise<any> {
  if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });

  const cachePath = getCachePath(url);

  // Check cache
  if (existsSync(cachePath)) {
    try {
      const cached = JSON.parse(readFileSync(cachePath, 'utf-8'));
      if (Date.now() - cached.timestamp < CACHE_TTL) {
        return cached.data;
      }
    } catch (e) {
      console.warn(`[cache] Failed to read cache for ${url}:`, e);
    }
  }

  // Build headers with auth if available
  const headers: Record<string, string> = {};
  if (process.env.GH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GH_TOKEN}`;
  }

  // Fetch and cache
  const res = await fetch(url, { headers });
  if (!res.ok) {
    console.warn(`[cache] Fetch failed for ${url}: ${res.status} ${res.statusText}`);
    return null;
  }

  try {
    const data = await res.json();
    writeFileSync(cachePath, JSON.stringify({ timestamp: Date.now(), data }));
    return data;
  } catch (e) {
    console.warn(`[cache] Failed to parse JSON for ${url}:`, e);
    return null;
  }
}
