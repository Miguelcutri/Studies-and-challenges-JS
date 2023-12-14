function Adicionar(a: number, b: number) {
  return console.log(a + b);
}

interface Pessoa {
  nome: string;
  idade: number;
}
const pessoa: Pessoa = {
  nome: "Miguel",
  idade: 24,
};

function imprimirPessoa(pessoa: Pessoa) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

imprimirPessoa(pessoa);
