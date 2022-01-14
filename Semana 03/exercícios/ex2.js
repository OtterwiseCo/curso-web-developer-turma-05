// Crie uma função que recebe uma string (com quatro possibilidades: “soma”, “subtrai”, “divide”, “multiplica”) e dois números.
// A função deve retornar a operação realizada informada pela string nos dois números.

// Exemplo Entrada:
// myFunction(‘soma’)(3)(5)

// Exemplo Saída:
// 8

const calculate = (operation) => {
  const operations = {
    soma: (a, b) => a + b,
    subtrai: (a, b) => a - b,
    multiplica: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  return (numberOne) =>
    (
      numberTwo, // numberOne = 2, numberTwo = 2
    ) =>
      operations[operation](numberOne, numberTwo); // operations["soma"] = operations.soma(2, 2)
};

console.log(calculate("soma")(2)(2));

const calculate2 = (operation) => {
  return (numberOne) => {
    return (numberTwo) => {
      switch (operation) {
        case "soma":
          return numberOne + numberTwo;
        case "subtrai":
          return numberOne - numberTwo;
        case "multiplica":
          return numberOne * numberTwo;
        case "divide":
          return numberOne / numberTwo;
        default:
          break;
      }
    };
  };
};

console.log(calculate2("soma")(2)(2));
