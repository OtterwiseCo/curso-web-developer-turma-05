// 15 - Elabore um programa que receba três valores como entrada e mostre eles
// em ordem crescente no console.

let valor1 = 2;
let valor2 = 1;
let valor3 = 3;

if (valor1 > valor2) {
  let aux = valor1;
  valor1 = valor2; // valor1 = 2
  valor2 = aux; // valor2 = 3
}
if (valor2 > valor3) {
  let aux = valor2;
  valor2 = valor3; // valor2 = 1
  valor3 = aux; // valor3 = 3
}
if (valor1 > valor2) {
  let aux = valor1;
  valor1 = valor2; // valor1 = 1
  valor2 = aux; // valor2 = 2
}

console.log(valor1 + " " + valor2 + " " + valor3);
