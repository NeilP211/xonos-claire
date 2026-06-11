// Restrained mono + violet ramp for the terminal/brutalist theme (placeholder
// accent until Claire picks hers). Each fallback thumbnail gets a stable,
// on-brand shade by index (no rainbow).
export const PALETTE = [
  '#8b5cf6', // violet
  '#2b2b2b', // graphite
  '#6d3fd1', // dim violet
  '#3a3a3a', // slate
  '#b794ff', // light violet
  '#1f1f1f', // near-black
  '#4c2a8f', // dark violet
  '#4a4a4a', // ash
]

export function colorFor(index) {
  return PALETTE[((index % PALETTE.length) + PALETTE.length) % PALETTE.length]
}

// Deterministic color from a string key (used for genres so the same genre keeps
// its color across ranges).
export function colorForKey(key) {
  let h = 0
  for (let i = 0; i < (key?.length ?? 0); i++) h = (h * 31 + key.charCodeAt(i)) | 0
  return colorFor(Math.abs(h))
}
