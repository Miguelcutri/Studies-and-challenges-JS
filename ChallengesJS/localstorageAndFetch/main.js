const title = document.getElementById("title");

async function getValue() {
  try {
    const response = await fetch("https://blockchain.info/ticker");
    if (!response.ok) {
      throw new Error(`Erro de HTTP, status: ${response.status}`);
    }
    const json = await response.json();

    const buyValue = json.BRL.buy;

    title.innerHTML = `Valor de compra do Bitcoin em Reais: R$ ${buyValue}`;

    const oldValue = localStorage.getItem("buyValueBitcoin");
    if (oldValue) {
      let comparison = "igual ao";
      if (buyValue > oldValue) {
        comparison = "maior que o";
      } else if (buyValue < oldValue) {
        comparison = "menor que o";
      }
      title.innerHTML += ` (Atual: ${comparison} valor anterior: R$ ${oldValue})`;
    }

    localStorage.setItem("buyValueBitcoin", buyValue);
  } catch (error) {
    console.error("Erro ao buscar dados: ", error);
    title.innerHTML = "Erro ao carregar dados";
  }
}

getValue();
setInterval(getValue, 30000);
