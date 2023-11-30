const quadrado = {
  lados: {
    cima: 10,
    direita: 10,
    baixo: 10,
    esquerda: 10,
  },
};
Object.freeze(quadrado.lados);
quadrado.lados.quintoLado = 10;
console.log(quadrado);


