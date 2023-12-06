const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.getElementById("btn");
const title = document.getElementById("title");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (input.value === "") {
    alert("Preencha o CEP");
    return;
  }

  await pegarDados();
});

async function pegarDados() {
  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${input.value}/json/`
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(`Erro de HTTP, status: ${response.status}`);
    }

    const json = await response.json();
    title.innerHTML = ` ${json.bairro} | ${json.logradouro} | ${json.localidade} | ${json.uf}`;
  } catch (error) {
    console.error("Erro ao buscar dados: ", error);
    title.innerHTML = "Erro ao carregar dados";
  }
}
