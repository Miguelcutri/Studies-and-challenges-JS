const originalArray = [[1, 2, 3, 4], 12];
const copiedArray = [...originalArray];

copiedArray[0].push(99);

console.log(originalArray); // Output: [[1, 2, 3, 4, 99], 12]
console.log(copiedArray); // Output: [[1, 2, 3, 4, 99], 12]


// O spread operator cria um novo array com base no originalArray (Isso se chama: Cópia superficial ou Shallow copy),
// Achei um pouco difícil explicar, mas vou dar um exemplo do que entendi:
// Imaginando que originalArray seja uma caixa (objeto), com vários objetos menores dentro (propriedades), quando
// fazemos uma cópia superficial desse objeto nós teríamos uma caixa exatamente igual e com objetos que parecem exatamente
// iguais aos originais, mas se algum desses "objetos menores" também for um caixa contendo mais itens, não criamos
// cópias dessa "caixa menor", mas colocamos um "link" direto na caixa original, ou seja, se eu mudar qualquer coisa,
// dentro dessa caixinha (tanto na caixa original quanto na cópia) a mudança também acontecerá na outra caixa pq estão
// compartilhando esses itens.
// Já com a cópia profunda (deep copy), imaginando o mesmo cenário das caixas, teríamos caixas idênticas, porém independentes
// o que eu mudar na "caixinha" (que seria um subarray ou subObjeto) não influenciaria na caixa principal, e vice-versa.
