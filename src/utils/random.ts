import seedrandom from 'seedrandom';

export function pickRandomIndexes(total:number, pick:number, seed:number=42): number[] {
  if (pick > total) throw new Error('pick > total');
  const rng = seedrandom(String(seed));
  const set = new Set<number>();
  while (set.size < pick) {
    const r = Math.floor(rng() * total);
    set.add(r);
  }
  return Array.from(set);
}
