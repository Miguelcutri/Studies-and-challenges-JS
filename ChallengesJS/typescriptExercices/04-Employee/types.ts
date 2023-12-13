interface Funcionario {
  nome: string;
  cargo: string;
}

interface Desenvolvedor extends Funcionario {
  linguagens: string[];
}
interface Designer extends Funcionario {
  ferramentasDesign: string[];
}

const Desenvolvedor: Desenvolvedor = {
  nome: "Miguel",
  cargo: "Desenvolvedor",
  linguagens: ["JavaScript", "TypeScript"],
};
const Designer: Designer = {
  nome: "Hugo",
  cargo: "Design",
  ferramentasDesign: ["Figma", "Photoshop"],
};
let DesenvolvedorOuDesign: Desenvolvedor | Designer;
let DesenvolvedorEDesign: Desenvolvedor & Designer;
