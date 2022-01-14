// Faça um programa que some todos os elementos do array abaixo e imprima na tela o somatório:
// [10, 2, 78, 1, 92, 24, 13]

const numbers = [10, 2, 78, 1, 92, 24, 13];

const sum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(sum);
