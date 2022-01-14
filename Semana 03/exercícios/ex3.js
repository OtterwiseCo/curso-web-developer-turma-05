// Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade, utilize os conhecimentos da aula para
// melhorar o código.

// Exemplo Entrada:
// { name: ‘Juca’, idade: 28 }

// Exemplo Saída:
// Maior de idade

const user = { name: "Juca", idade: 28 };

const checkAge = ({ idade }) =>
  idade >= 18 ? "É maior de idade" : "É menor de idade";

console.log(checkAge(user));
