const title = document.getElementById("title");
const button = document.getElementById("btn");

async function pegarDados() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    if (!response.ok) {
      throw new Error(`Erro de HTTP, status: ${response.status}`);
    }

    const json = await response.json();
    title.innerHTML = json.value;
  } catch (error) {
    console.error("Erro ao buscar dados: ", error);
    title.innerHTML = "Erro ao carregar dados";
  }
}
button.onclick = pegarDados;
