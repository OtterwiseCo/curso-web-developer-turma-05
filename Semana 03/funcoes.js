function sum(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

function show(value) {
  console.log(value);
}

function sum3(a, b, callback) {
  // callback = show
  const total = a + b; // 2 + 2
  callback(total); // show(total)
  return total;
}

sum3(2, 2, show);

sum3(2, 2, function (value) {
  console.log(value);
});

function sumTwoNumbers(numberOne) {
  // numberOne = 4
  return function (numberTwo) {
    // numberOne = 4
    // numberTwo = 4
    return numberOne + numberTwo;
  };
}

console.log(sumTwoNumbers(4)(4));

// funções em objetos

const operations = {
  sum: sum,
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(operations.sum(2, 2));
console.log(operations.subtract(4, 2));

// funções em arrays

const operationsArray = [sum];

console.log(operationsArray[0](3, 3));

// Arrow function

const multiply = (a, b) => {
  console.log(this); //retorna um objeto vazio, pois arrow function não tem referencia propria
  return a * b;
};

// As funções são equivalentes
function multiply2(a, b) {
  console.log(this); // retorna uma referencia da propria função
  return a * b;
}

// retorno implícito
const multiply3 = (a, b) => {
  return a * b;
};

// A função abaixo e a de cima são equivalentes
// const multiply3 = (a, b) => a * b;

console.log(multiply(10, 10));

const returnObject = () => {
  return {
    name: "joao",
  };
};

// função com retorno implicito
const returnObject = () => ({
  name: "joao",
});
