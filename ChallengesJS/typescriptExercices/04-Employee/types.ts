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

const desenvolvedor: Desenvolvedor = {
  nome: "Miguel",
  cargo: "Desenvolvedor",
  linguagens: ["JavaScript", "TypeScript"],
};
const designer: Designer = {
  nome: "Hugo",
  cargo: "Design",
  ferramentasDesign: ["Figma", "Photoshop"],
};
let desenvolvedorOuDesign: Desenvolvedor | Designer;
let desenvolvedorEDesign: Desenvolvedor & Designer;
