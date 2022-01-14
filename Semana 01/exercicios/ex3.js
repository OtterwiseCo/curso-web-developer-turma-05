// 1. Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar um valor booleano se for par.

// resolução 1

function checkIfIsEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// resolução 2

function checkIfIsEven2(n) {
  if (n % 2 === 0) return true;

  return false;
}

// resolução 3

function checkIfIsEven3(n) {
  return n % 2 === 0;
}

console.log(checkIfIsEven(3));
