const transactionsUl = document.querySelector("#transactions");
const revenueDisplay = document.querySelector("#money-increment");
const expenseDisplay = document.querySelector("#money-decrement");
const balanceDisplay = document.querySelector("#balance");
const form = document.querySelector("#form");
const inputTransactionName = document.querySelector("#text");
const inputTransactionAmount = document.querySelector("#amount");

const transaction = JSON.parse(localStorage.getItem("transactions"));
let transactions =
  localStorage.getItem("transactions") !== null ? transaction : [];

const removeTransaction = (ID) => {
  transactions = transactions.filter((transaction) => transaction.id !== ID);
  updateLocalStorage();
  init();
};

const addTransactionIntoDom = (transaction) => {
  const operator = transaction.expenses > 0 ? "-" : "+";
  const CSSClass = transaction.expenses > 0 ? "decrement" : "increment";
  const li = document.createElement("li");

  li.innerHTML = `${transaction.name} ${
    transaction.lastName
  } <span>${operator} R$ ${
    transaction.expenses > 0 ? transaction.expenses : transaction.revenues
  }</span><button onClick="removeTransaction(${
    transaction.id
  })" class="delete-btn">x</button>`;

  li.classList.add(CSSClass);
  transactionsUl.append(li);
};
const updateBalanceValues = () => {
  const transaction = transactions.map(
    (transaction) => transaction.revenues - transaction.expenses
  );
  const total = transaction
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);
  const expense = Math.abs(
    transaction
      .filter((value) => value < 0)
      .reduce((accumulator, value) => accumulator + value, 0)
  ).toFixed(2);
  const revenue = transaction
    .filter((value) => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2);
  balanceDisplay.textContent = `R$ ${total}`;
  revenueDisplay.textContent = `R$ ${revenue}`;
  expenseDisplay.textContent = `R$ ${expense}`;
};
const init = () => {
  transactionsUl.innerHTML = "";
  transactions.forEach(addTransactionIntoDom);
  updateBalanceValues();
};

init();

const updateLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};
const generateID = () => Math.round(Math.random() * 1000);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const transactionName = inputTransactionName.value.trim();
  const transactionLastName = document.querySelector("#lastname").value.trim();
  const transactionAmount = parseFloat(inputTransactionAmount.value.trim());

  if (
    transactionName === "" ||
    transactionAmount === "" ||
    transactionLastName === ""
  ) {
    alert("Preencha o nome, sobrenome e o valor da transação");
    return;
  }
  const totalExpenses = transactions.reduce(
    (acc, t) => (t.expenses > 0 ? acc + t.expenses : acc),
    0
  );
  const totalRevenues = transactions.reduce(
    (acc, t) => (t.revenues > 0 ? acc + t.revenues : acc),
    0
  );
  const balance = totalRevenues - totalExpenses;
  const personAccount = {
    id: generateID(),
    name: transactionName,
    lastName: transactionLastName,
    expenses: transactionAmount < 0 ? Math.abs(transactionAmount) : 0,
    revenues: transactionAmount > 0 ? transactionAmount : 0,
    totalExpenses: totalExpenses,
    totalRevenues: totalRevenues,
    balance: balance,
  };
  transactions.push(personAccount);
  init();
  updateLocalStorage();

  inputTransactionName.value = "";
  inputTransactionAmount.value = "";
  document.querySelector("#lastname").value = "";
});
