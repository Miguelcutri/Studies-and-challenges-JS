async function pegarDados() {
  try {
    const response = await fetch(`https://api.origamid.dev/json/cursos.json`);
    if (!response.ok) {
      throw new Error(`Erro de HTTP, status: ${response.status}`);
    }

    const json = await response.json();
    mostrarDados(json);
  } catch (error) {
    console.error("Erro ao buscar dados: ", error);
    title.innerHTML = "Erro ao carregar dados";
  }
}

function mostrarDados(dados) {
  const container = document.getElementById("dados-api");
  dados.forEach((curso) => {
    const elementoCurso = document.createElement("div");

    const nivel = curso.nivel === "iniciante" ? "color-blue" : "color-red";

    elementoCurso.innerHTML = `
    <h2 id=${nivel}>${curso.nome}</h2>
    <p>Horas: ${curso.horas}</p>
    <p>Nível: ${curso.nivel}</p>
    <p>Nome: ${curso.nome}</p>
    <p>Aulas: ${curso.aulas}</p>
    <p>É gratuito? ${curso.gratuito === true ? "sim" : "não"}</p>
    <p>Tags: ${curso.tags}</p>
    <p>Id das aulas: ${curso.idAulas}</p>
    <p>Nível: ${curso.nivel}</p>`;

    container.appendChild(elementoCurso);
  });
}
pegarDados();
