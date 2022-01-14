const value = 10;

if (value > 10) {
  console.log("valor é maior que 10");
} else if (value === 10) {
  console.log("valor é 10");
} else {
  console.log("valor é menor que 10");
}

// if ternário

console.log(
  value >= 10 ? "valor é igual ou maior que 10" : "valor é menor que 10",
);

console.log(
  value > 10
    ? "valor é maior que 10"
    : value === 10
    ? "valor é 10"
    : "valor é menor que 10",
);
