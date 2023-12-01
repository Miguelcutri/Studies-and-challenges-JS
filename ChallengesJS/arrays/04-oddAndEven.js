const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((pares) => {
  return pares % 2 === 0;
});
const impares = numeros.filter((impares) => {
  return impares % 2 !== 0;
});

console.log(`Números que são pares: ${pares}, Quantidade de números pares: ${pares.length}`);
console.log(`Números que são ímpares: ${impares}, Quantidade de números ímpares: ${impares.length}`);
