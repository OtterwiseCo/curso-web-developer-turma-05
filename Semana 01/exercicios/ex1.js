/*
Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas: nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, primeira nota e segunda nota. A partir dessas informações, você deve mostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

Exemplo de Saída:
Nome Completo: João Pedro Bretanha
Idade: 29
Data de Nascimento: 11/04/1992
Média: 8
*/

let nome = "João Pedro";
let sobrenome = "Bretanha";
let diaDoNascimento = 18;
let mesDoNascimento = 2;
let anoDoNascimento = 1994;
let primeiraNota = 10;
let segundaNota = 2;

console.log("Nome completo: " + nome + " " + sobrenome);
console.log("Idade: " + (2021 - 1994));
console.log(
  "Data de Nascimento: " +
    diaDoNascimento +
    "/" +
    mesDoNascimento +
    "/" +
    anoDoNascimento,
);
console.log("Média: " + (primeiraNota + segundaNota) / 2);
