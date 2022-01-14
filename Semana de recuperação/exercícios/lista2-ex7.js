// 7 - Dado um array de números, mostre quantos valores são pares, quantos são
// ímpares, quantos são positivos e quantos são negativos.
// Exemplo de Entrada:
// [-5,0,-3,-4,12]
// Exemplo de Saída:
// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)

const valores = [-5, 0, -3, -4, 12];
            //    0  1   2   3   4
let positivos = 0;
let negativos = 0;
let pares = 0;
let impares = 0;

for (let index = 0; index < valores.length; index++) {
  const valor = valores[index];
  if (valor >= 0) {
    positivos++;
  }
  if (valor < 0) {
    negativos++;
  }
  if (valor % 2 === 0) {
    pares++;
  }
  if (valor % 2 !== 0) {
    impares++;
  }
}

console.log(positivos + " valores são positivos");
console.log(negativos + " valores são negativos");
console.log(pares + " valores são pares");
console.log(impares + " valores são impares");
