export interface Funcionario {
  nome: string;
  cargo: string;
}
const Desenvolvedor: Funcionario = {
  nome: "Miguel",
  cargo: "Desenvolvedor",
};
const Design: Funcionario = {
  nome: "Hugo",
  cargo: "Design",
};
// Não consegui entender essa parte:
let DesenvolvedorOuDesign: Desenvolvedor | Design;
let DesenvolvedorEDesign: Desenvolvedor & Design;
