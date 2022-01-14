// Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console

const names = "Maria, Paulo, Moisés, Joel, Ana";
const splitedNames = names.split(",");

for (let index = 0; index < splitedNames.length; index++) {
  const element = splitedNames[index].trim();
  console.log(element);
}
