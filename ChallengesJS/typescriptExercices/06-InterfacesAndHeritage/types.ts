function concatenarArrays<N, S>(array1: N, array2: S) {
  console.log(`${array1},${array2}`);
}
concatenarArrays<number[], string[]>([1, 2, 3], ["3", "2", "1"]);
