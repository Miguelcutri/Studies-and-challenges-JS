const numbers = [5, 7, 1, 8, 9];
const numbersGrowing = numbers.sort((a, b) => {
  return b - a;
});
console.log(numbersGrowing);
