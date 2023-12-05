const title = document.getElementById("title");
const button = document.getElementById("btn");
const img = document.getElementById("img");

async function pegarDados(e) {
  const r = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await r.json();
  console.log(json);
  title.innerHTML = json.value;
  img.src = json.icon_url;
  console.log(json.value);
}
button.onclick = pegarDados;
