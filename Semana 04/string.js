// Métodos de string

// Métodos para extrair conteudo de uma string

// slice

const str = "maçã, banana, laranja";

const part = str.slice(6, 12);
console.log(part);

// substring

const part2 = str.substring(6, 12);
console.log(part2);

// substr - (DEPRECIADO)

const part3 = str.substr(6, 6);
console.log(part3);

// Métodos para modificar conteúdos de uma string

// Replace e Replace All

let text = "Olá alunos Otterwise Otterwise";
let newText = text.replace("Otterwise", "do curso web developer");
let newText2 = text.replaceAll("Otterwise", "teste");

console.log(newText);
console.log(newText2);

let newTextRegex = text.replace(/Otterwise/gi, "do curso web developer");
// g = todas as ocorrências do padrão
// i = case insensitive
console.log(newTextRegex);

// toUpperCase e toLowerCase

const myName = "joao";
const myName2 = "JOAO";
console.log(myName.toUpperCase());
console.log(myName2.toLowerCase());

// trim

const frase = "          Olá alunos Otterwise ";
console.log(frase.trim());

// padStart e padEnd

const numero = "5";
console.log(numero.padStart(4, "0"));

console.log(numero.padEnd(4, "0"));

// split

const arrayFruits = str.split(",");
console.log(arrayFruits);
