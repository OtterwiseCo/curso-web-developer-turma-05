// Levando em consideração o array abaixo, adicione um novo elemento ao final do array com seu nome e imprima no console na ordem inversa.
// [{name: “joao”}, {name: “pedro”}]

const names = [{ name: "joao" }, { name: "pedro" }];

const newArray = names.concat({ name: "novo nome" }).reverse();

console.log(newArray);
