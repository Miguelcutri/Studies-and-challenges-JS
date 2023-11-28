const originalArray = [[1, 2, 3, 4], 12];
const copiedArray = [...originalArray];

copiedArray[0].push(99);

console.log(originalArray); // Output: [[1, 2, 3, 4, 99], 12]
console.log(copiedArray); // Output: [[1, 2, 3, 4, 99], 12]


// O spread operator cria um novo array com base no originalArray (Criando um novo ponto na memória),
//acontece que se usarmos o índice [0] no copiedArray, o javascript busca lá na raiz do originalArray e no mesmo
// ponto de memória, alterando o array original