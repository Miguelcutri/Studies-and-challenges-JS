interface Animal {
  nome: string;
  tipo: string;
}

interface Ave extends Animal {
  asas: boolean;
}

const Passarinho: Ave = {
  nome: "biro biro",
  tipo: "pardal",
  asas: true,
};
const Mamifero: Animal = {
  nome: "leão",
  tipo: "felino",
};

console.log(Mamifero, Passarinho);
