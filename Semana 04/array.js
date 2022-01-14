// Métodos de Array

// Adicionar novos valores em array

// Concat - Não altera o array original

const students = ["cristian", "Alessandro", "Ermesson"];
const newStudentsArray = students.concat("Wallace");
const newStudentsArray2 = students.concat(["Wallace", "Barros"]);

console.log(students);
console.log(newStudentsArray);
console.log(newStudentsArray2);

// push - modifica o array

const fruits = ["banana", "laranja"];
fruits.push("maçã");
console.log(fruits);

// join

const joinedFruits = fruits.join(", ");
console.log(joinedFruits);

// pop - remove o ultimo elemento de um array e modifica o array principal

const users = ["joao", "barros", "mari"];
const user = users.pop();
console.log(users);
console.log(user);

// shift - remove o primeiro elemento do array e modifica o array principal

const fruits2 = ["banana", "laranja"];
const fruit = fruits2.shift();

console.log(fruits2);
console.log(fruit);

// unshift - insere elementos no início do array modificando o array principal

fruits2.unshift("limão");
console.log(fruits2);

// slice

const tools = ["chave de fenda", "martelo", "furadeira"];
const toolsPart = tools.slice(1);

console.log(toolsPart);

// splice - para adicionar ou remover

// remover
tools.splice(1, 2);
console.log(tools);

// adicionar
tools.splice(1, 0, "chave de boca", "martelete");
console.log(tools);

// reverse

const tiProducts = ["hd", "memória", "ssd", "placa de video"];
tiProducts.reverse();
console.log(tiProducts);
