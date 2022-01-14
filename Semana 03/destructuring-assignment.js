// Destructuring Assignment em Objetos

const person = {
  name: "joao",
  age: 27,
  address: {
    street: "minha rua",
    number: 102,
  },
};

console.log(person.name); //joao
console.log(person.age); // 27
console.log(person.address.street); // minha rua
console.log(person.address.number); // 102

const {
  name,
  age,
  address: { street, number },
  address,
} = person;

console.log(name); // joao
console.log(age); // 27
console.log(street); // minha rua
console.log(number); // 102
console.log(address);

// Destructuring Assignment em Arrays
// Baseado na posição do array

const names = ["joao", "pedro", "bretanha"];

console.log(names[0]); // joao
console.log(names[1]); // pedro

const [firstName, secondName] = names;

console.log(firstName); // joao
console.log(secondName); // pedro

const [, , lastName] = names;
console.log(lastName); // bretanha

// Destructuring Assignment em parametros de funções

const users = ["joao", "rodrigo", "christian", "sidemar"];

// const [ firstElement ] = users
const getFirstElement = ([firstElement]) => {
  return firstElement;
};

console.log("getFirstElement", getFirstElement(users));

const user = {
  name: "joao",
  age: 27,
};

const getName = ({ name }) => {
  return name;
};

console.log("getName", getName(user));

const users2 = [{ name: "joao" }];

// const [{name}] = users2
const getFirstElementName = ([{ name }]) => {
  return name;
};

console.log("getFirstElementName", getFirstElementName(users2));
