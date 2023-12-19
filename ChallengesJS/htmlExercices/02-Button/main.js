const buttonIsTrue = document.getElementById("btn");
const total = document.getElementById("total");

if (buttonIsTrue) {
  function btnAdd() {
    if (total.textContent < 10) {
      total.textContent = parseInt(total.textContent) + 1;
    } else {
      console.log("Não é mais possível adicionar");
    }
  }
  buttonIsTrue.onclick = btnAdd;
}
