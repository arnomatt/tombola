export type Card = number[][]; // 3 rows x 9 columns, 0 means empty cell

const columns = [
  Array.from({ length: 9 }).map((_, i) => i + 1),
  Array.from({ length: 10 }).map((_, i) => i + 10),
  Array.from({ length: 10 }).map((_, i) => i + 20),
  Array.from({ length: 10 }).map((_, i) => i + 30),
  Array.from({ length: 10 }).map((_, i) => i + 40),
  Array.from({ length: 10 }).map((_, i) => i + 50),
  Array.from({ length: 10 }).map((_, i) => i + 60),
  Array.from({ length: 10 }).map((_, i) => i + 70),
  Array.from({ length: 11 }).map((_, i) => i + 80),
];

const pickBucket = () => {
  return Math.floor(Math.random() * columns.length);
};

const pickNumber = (bucket: number) => {
  return columns[bucket][Math.floor(Math.random() * columns[bucket].length)];
};

const pickNumbers = () => {
  const numbers = new Set<number>();
  const picks = new Map<number, number>();

  for (let i = 0; i < columns.length; i++) {
    const currentPick = pickNumber(i);
    numbers.add(currentPick);
    picks.set(i, 1);
  }

  while (numbers.size < 15) {
    const bucket = pickBucket();
    const picksFromCurrentBucket = picks.get(bucket) ?? 0;

    // skip current bucket if we already had 3 picks
    if (picksFromCurrentBucket > 2) {
      continue;
    }

    // get a new number
    let currentPick = pickNumber(bucket);
    while (numbers.has(currentPick)) {
      currentPick = pickNumber(bucket);
    }

    // add to set and track how many picks we had from a single bucket
    numbers.add(currentPick);
    picks.set(bucket, picksFromCurrentBucket + 1);
  }

  return Array.from(numbers);
};
