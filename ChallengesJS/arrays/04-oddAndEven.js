const numeros = [];
const tamanho = 10;
for (let i = 1; i <= tamanho; i++) {
  numeros.push(i);
}

const pares = numeros.filter((pares) => {
  return pares % 2 === 0;
});
const impares = numeros.filter((impares) => {
  return impares % 2 !== 0;
});

console.log(
  `Números que são pares: ${pares}, Quantidade de números pares: ${pares.length}`
);
console.log(
  `Números que são ímpares: ${impares}, Quantidade de números ímpares: ${impares.length}`
);
