const transactionsUl = document.querySelector("#transactions");
const personAccount = [
  {
    id: 1,
    name: "Miguel Cutri",
    expenses: 1000,
    revenues: 1000,
    totalExpenses: 5000.0,
    totalRevenues: 10000.0,
    balance: 5000.0,
  },
  {
    id: 2,
    name: "Bolo de fubá",
    expenses: 1000,
    revenues: 1000,
    totalExpenses: 0,
    totalRevenues: 0,
    balance: 50,
  },
  {
    id: 3,
    name: "Bolo de chocolate",
    expenses: 25,
    revenues: 0,
    totalExpenses: 0,
    totalRevenues: 0,
    balance: 50,
  },
];

// localStorage.setItem("personAccount", JSON.stringify(personAccount));

// const personAccountString = JSON.parse(localStorage.getItem("personAccount"));

// console.log(personAccountString);
// const personAccountStringMap = personAccountString.map((item) => {
//   return <h1>{item}</h1>;
// });

const addTransactionIntoDom = (transaction) => {
  const operator = transaction.expenses > 0 ? "-" : "+";
  const CSSClass = transaction.expenses > 0 ? "decrement" : "increment";
  const li = document.createElement("li");
  li.innerHTML = `${transaction.name} <span>${operator} R$ ${
    transaction.expenses > 0 ? transaction.expenses : transaction.revenues
  }</span><button class="delete-btn">x</button>`;
  li.classList.add(CSSClass);
  transactionsUl.append(li);
};
const updateBalanceValues = () => {
  const transaction = personAccount.map(
    (transaction) => transaction.expenses - transaction.revenues
  );
  const total = transaction.reduce(
    (accumulator, transaction) => accumulator + transaction,
    0
  );

  console.log(total);
};
const init = () => {
  personAccount.forEach(addTransactionIntoDom);
  updateBalanceValues();
};

init();
