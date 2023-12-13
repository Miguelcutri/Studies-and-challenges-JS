function toNumber(value: number | string) {
  if (typeof value === "number") {
    return "É um número";
  } else if (typeof value === "string") {
    return "É uma string";
  } else {
    return "value deve ser um número ou uma string";
  }
}

console.log(toNumber(5));
console.log(toNumber("string"));
