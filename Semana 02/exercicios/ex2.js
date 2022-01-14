// Crie um algoritmo que imprime todos os valores de um array qualquer, menos o ultimo elemento.

const fruits = ["laranja", "banana", "maçã"];

for (let index = 0; index < fruits.length; index++) {
  if (index !== fruits.length - 1) {
    const element = fruits[index];
    console.log(element);
  }
}
