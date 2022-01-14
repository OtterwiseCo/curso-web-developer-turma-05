// Tendo como informação os três lados de um triângulo faça um programa
// que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
// OBS: Triângulo Equilátero → Possui os 3 lados iguais;
// Triângulo Isósceles → Possui 2 lados iguais;
// Triângulo Escaleno → Possui 3 lados diferentes.
// Os valores de entrada serão:
// Lado 1;
// Lado 2;
// Lado 3.

// Exemplo de Entrada:
// 10
// 5
// 10
// -----------------
// 2
// 1
// 5

// Exemplo de Saída:
// Triângulo Isósceles
// -----------------
// Triângulo Escaleno

const lado1 = 1;
const lado2 = 2;
const lado3 = 1;

if (lado1 === lado2 && lado2 === lado3) {
  console.log("Triângulo equilátero");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("Triângulo Isósceles");
} else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
  console.log("Triângulo Escaleno");
}
