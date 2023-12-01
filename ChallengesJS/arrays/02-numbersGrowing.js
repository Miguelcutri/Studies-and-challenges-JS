const numbers = [5, 7, 1, 8, 9];
const numbersGrowing = numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
console.log(numbersGrowing);
