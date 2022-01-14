// 14 - Faça um programa que receba de entrada três valores e mostre no console
// a soma dos dois maiores.

const valor1 = 50;
const valor2 = 100;
const valor3 = 15;

if (valor1 < valor2 && valor1 < valor3) {
  console.log(valor2 + valor3);
} else if (valor2 < valor1 && valor2 < valor3) {
  console.log(valor1 + valor3);
} else {
  console.log(valor1 + valor2);
}
