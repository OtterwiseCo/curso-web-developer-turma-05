// Variáveis e atribuição

let contador = 0;

// var variavel = "var";
let variavelLet = "let"; // Declarar como let variaveis que mudam de valor
const constante = "const"; // Declarar como constante variaveis que não mudam de valor

let idade = 20;

let maiorIdade = 18;

if (idade >= maiorIdade) {
  console.log("Pessoa maior de idade");
}

// Expressões aritméticas

// console.log(2 + 2);
// console.log(4 - 2);
// console.log(2 * 2);
// console.log(4 / 2);

console.log(10 / (2 + 2));

// verificar se um numero é par (mod)
console.log(11 % 2 === 0);

// Expressões lógicas

// AND (&&), OR(||), NOT(!)

// Tabela verdade &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// Tabela verdade ||
// true || true = true
// true || false = true
// false || true = true
// false || false = false

let numero = 12;

// testar se um numero está entre o intervalo 0 - 10
console.log(numero >= 0 && numero <= 10);

// testar se um numero está fora do intervalo 0 - 10
console.log(numero < 0 || numero > 10);

// Not (!)

// !true = false
// !false = true

const users = [
  {
    name: "joao",
    active: false,
  },
  {
    name: "mari",
    active: true,
  },
];

for (let index = 0; index < users.length; index++) {
  const element = users[index];
  if (!element.active) {
    console.log("usuário " + element.name + " está inativo");
  }
}

// IF's

const idadeNadador = 4;

if (idadeNadador < 10 && idadeNadador > 5) {
  console.log("Nadador está na categoria infantil");
} else if (idadeNadador >= 10 && idadeNadador < 15) {
  console.log("Nadador está na categoria juvenil");
} else if (idadeNadador >= 18) {
  console.log("Nadador está na categoria adulto");
} else {
  console.log("Não existe categoria para essa idade");
}

idadeNadador < 10 && idadeNadador > 5
  ? console.log("Nadador está na categoria infantil")
  : idadeNadador >= 10 && idadeNadador < 15
  ? console.log("Nadador está na categoria juvenil")
  : idadeNadador >= 18
  ? console.log("Nadador está na categoria adulto")
  : console.log("Não existe categoria para essa idade");

console.log(
  idadeNadador < 5
    ? "Não existe categoria para essa idade"
    : "Existem categorias para essa idade",
);

// Operadores de comparação

// >, >=, <, <=, ==, ===, !=, !==

console.log("4 == '4'", 4 == "4"); // Não compara o tipo
console.log("4 === '4'", 4 === "4"); // Compara o tipo

console.log("4 != '4'", 4 != "4"); // Não compara o tipo
console.log("4 !== '4'", 4 !== "4"); // Compara o tipo

// Array

const variavel = 10;
const array = [10, 20, 30, "joao"];

console.log(array[3]);

// Estrutura de repetição

// index++
// index = index + 1
// index += 1

// for (let index = 0; index < 3; index++) {
//   console.log("Olá mundo" + index);
// }

for (let index = 0; index < 10; index++) {
  console.log(index);
}

const arrayStrings = ["joao", "mari", "alessandro", "rodrigo"];

for (let index = 0; index < arrayStrings.length; index++) {
  console.log(arrayStrings[index]);
}
