// Troque todas as vírgulas na string abaixo por ponto final:
// “Olá, mundo, meu, nome, é, Juca”

const text = "Olá, mundo, meu, nome, é, Juca";

const newText = text.replaceAll(",", ".");
console.log(newText);

// Segunda forma de resolver

const newText2 = text.replace(/,/g, ".");
console.log(newText2);
