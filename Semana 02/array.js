let num = 0;

let numArray = [10, 20, 30, 40];

console.log(numArray[1] + numArray[3]);

let fruits = ["banana", "maçã", "laranja"];

console.log(fruits[2]);

function hello() {
  console.log("hello world");
}

let fruitsAndNumbers = ["banana", 2, "maça", 4, null, undefined, true, hello];

fruitsAndNumbers[7](); //  fruitsAndNumbers[7] == hello

// console.log(fruitsAndNumbers[7]());

fruitsAndNumbers[0] = "laranja";

console.log(fruitsAndNumbers);
