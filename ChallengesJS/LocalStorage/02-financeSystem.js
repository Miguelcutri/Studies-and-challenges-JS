const personAccount = {
  name: "Miguel Cutri",
  expenses: 1000.0,
  revenues: 2000.0,
  totalExpenses: 5000.0,
  totalRevenues: 10000.0,
  balance: 5000.0,
};

localStorage.setItem("personAccount", JSON.stringify(personAccount));

const personAccountString = JSON.parse(localStorage.getItem("personAccount"));

console.log(personAccountString);
const personAccountStringMap = personAccountString.map((item) => {
  return <h1>{item}</h1>;
});
