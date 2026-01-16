// 9 columns total
// first column has 1-9, second 10-19 etc. Only the last one has 80-90 numbers (10 numbers)
// first pick 1 random number from each column (constraint on at least 1 number per column)
// then randomly select other 6 numbers (constraint on no more than 3 numbers allowed on a column)
// position the numbers so that each row has exactly 5 numbers in it

export type Card = number[][]; // 3 rows x 9 columns, 0 means empty cell

export function generateCard(): Card {
  // Define column ranges
  const columns = [
    [1, 9],
    [10, 19],
    [20, 29],
    [30, 39],
    [40, 49],
    [50, 59],
    [60, 69],
    [70, 79],
    [80, 90],
  ];

  // Step 1: Pick one random number from each column (9 numbers)
  const selectedNumbers: { col: number; num: number }[] = [];
  const columnCounts = new Array(9).fill(0);

  for (let col = 0; col < 9; col++) {
    const [min, max] = columns[col];
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    selectedNumbers.push({ col, num });
    columnCounts[col]++;
  }

  // Step 2: Pick 6 more random numbers (respecting max 3 per column)
  const availableColumns = columns.map((range, col) => ({
    col,
    range,
    count: columnCounts[col],
  }));

  for (let i = 0; i < 6; i++) {
    // Filter columns that can still accept numbers (max 3)
    const validColumns = availableColumns.filter((c) => c.count < 3);
    if (validColumns.length === 0) break; // Safety check

    // Pick a random column
    const selectedCol =
      validColumns[Math.floor(Math.random() * validColumns.length)];
    const [min, max] = selectedCol.range;

    // Pick a random number that hasn't been selected yet in this column
    let num: number;
    let attempts = 0;
    do {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      attempts++;
    } while (
      selectedNumbers.some((n) => n.col === selectedCol.col && n.num === num) &&
      attempts < 100
    );

    selectedNumbers.push({ col: selectedCol.col, num });
    selectedCol.count++;
    columnCounts[selectedCol.col]++;
  }

  // Step 3: Distribute numbers into rows (5 per row, respecting column constraints)
  const card: Card = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  // Group numbers by column
  const numbersByColumn: number[][] = Array.from({ length: 9 }, () => []);
  selectedNumbers.forEach(({ col, num }) => {
    numbersByColumn[col].push(num);
  });

  // Sort numbers within each column
  numbersByColumn.forEach((nums) => nums.sort((a, b) => a - b));

  // Pre-allocate rows for each column to ensure balanced distribution
  const columnRowAssignments: number[][] = Array.from({ length: 9 }, () => []);
  const rowCounts = [0, 0, 0]; // Track how many numbers are in each row

  // Assign rows for each column's numbers
  for (let col = 0; col < 9; col++) {
    const numCount = numbersByColumn[col].length;
    if (numCount === 0) continue;

    // Get available rows (those with < 5 numbers)
    const availableRows = [0, 1, 2].filter((row) => rowCounts[row] < 5);

    // Randomly select which rows will have numbers for this column
    const selectedRows = selectRandomRows(availableRows, numCount);
    selectedRows.sort((a, b) => a - b); // Sort to maintain ascending order

    columnRowAssignments[col] = selectedRows;
    selectedRows.forEach((row) => rowCounts[row]++);
  }

  // Place numbers in the card
  for (let col = 0; col < 9; col++) {
    const nums = numbersByColumn[col];
    const rows = columnRowAssignments[col];

    nums.forEach((num, idx) => {
      if (rows[idx] !== undefined) {
        card[rows[idx]][col] = num;
      }
    });
  }

  // Step 4: Adjust to ensure each row has exactly 5 numbers
  // This is a safety step - the algorithm should naturally satisfy this
  for (let attempts = 0; attempts < 100; attempts++) {
    const needsMore = rowCounts.findIndex((count) => count < 5);
    const hasTooMany = rowCounts.findIndex((count) => count > 5);

    if (needsMore === -1 && hasTooMany === -1) break;

    if (needsMore !== -1 && hasTooMany !== -1) {
      // Find a column where we can move a number from hasTooMany to needsMore
      for (let col = 0; col < 9; col++) {
        if (card[hasTooMany][col] !== 0 && card[needsMore][col] === 0) {
          card[needsMore][col] = card[hasTooMany][col];
          card[hasTooMany][col] = 0;
          rowCounts[needsMore]++;
          rowCounts[hasTooMany]--;
          break;
        }
      }
    }
  }

  return card;
}

// Helper function to randomly select rows for a column's numbers
function selectRandomRows(availableRows: number[], count: number): number[] {
  const selected: number[] = [];
  const pool = [...availableRows];

  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    selected.push(pool[idx]);
    pool.splice(idx, 1);
  }

  return selected;
}
