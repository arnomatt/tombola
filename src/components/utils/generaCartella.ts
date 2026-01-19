// 9 columns total
// first column has 1-9, second 10-19 etc. Only the last one has 80-90 numbers (10 numbers)
// first pick 1 random number from each column (constraint on at least 1 number per column)
// then randomly select other 6 numbers (constraint on no more than 3 numbers allowed on a column)
// position the numbers so that each row has exactly 5 numbers in it

export type Cartella = number[][]; // 3 rows x 9 columns, 0 means empty cell

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

const buildRowsMask = () => {
  const remainingBuckets = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const cartella: Cartella = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < 3; i++) {
    // 5 picks per row
    let count = 5;

    while (count > 0) {
      let tempBucket = pickBucket();
      // for the last row, we aim to fill all the remaining buckets
      // otherwise, we pick at random until we find an empty space on the row
      if (i === 2 && remainingBuckets.size > 0) {
        tempBucket = [...remainingBuckets][0];
      } else {
        while (cartella[i][tempBucket] !== 0) {
          tempBucket = pickBucket();
        }
      }
      cartella[i][tempBucket] = 1;
      if (remainingBuckets.has(tempBucket)) {
        remainingBuckets.delete(tempBucket);
      }
      count--;
    }
  }

  return cartella;
};

export const buildCartella = (): Cartella => {
  const cartella = buildRowsMask();

  // Assign random numbers to masked positions
  for (let i = 0; i < 9; i++) {
    const pickedNumbers: number[] = [];
    for (let j = 0; j < 3; j++) {
      if (cartella[j][i] === 1) {
        let number = pickNumber(i);
        while (pickedNumbers.includes(number)) {
          number = pickNumber(i);
        }
        cartella[j][i] = number;
        pickedNumbers.push(number);
      }
    }
  }

  // Sort each column in ascending order
  for (let i = 0; i < 9; i++) {
    const colNumbers: number[] = [];
    for (let j = 0; j < 3; j++) {
      if (cartella[j][i] !== 0) {
        colNumbers.push(cartella[j][i]);
      }
    }
    colNumbers.sort((a, b) => a - b);

    let idx = 0;
    for (let j = 0; j < 3; j++) {
      if (cartella[j][i] !== 0) {
        cartella[j][i] = colNumbers[idx];
        idx++;
      }
    }
  }

  return cartella;
};
