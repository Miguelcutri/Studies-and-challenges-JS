const myData = {
  name: "Vitor Miguel",
  lastName: "Cutri",
  age: 24,
  country: "Brasil",
  city: "Campinas",
};

localStorage.setItem("myData", JSON.stringify(myData));

const myDataString = JSON.parse(localStorage.getItem("myData"));

console.log(myDataString);
