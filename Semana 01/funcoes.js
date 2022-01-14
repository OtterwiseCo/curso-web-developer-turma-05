// Funções regulares

// =soma(A1; B1)

function soma(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

let somaEntreDoisNumeros = soma(2, 2);

console.log(somaEntreDoisNumeros);

// Funções sem parametro

function sayHello() {
  console.log("Olá mundo");
}

sayHello();

function selectOperation(operacao) {
  switch (operacao) {
    case "+":
      return "operação de soma";
    case "-":
      return "operação de subtração";
    case "*":
      return "operação de multiplicação";
    case "/":
      return "operação de divisão";
    default:
      return "Operação inválida";
  }
}

const operation = selectOperation("+");

console.log(operation);
