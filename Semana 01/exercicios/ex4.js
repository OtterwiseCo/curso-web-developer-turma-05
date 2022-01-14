// 2. Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo:
// Idade - Categoria
// 5 a 7 anos - Infantil A
// 8 a 10 anos - Infantil B
// 11 - 13 anos - Juvenil A
// 14 - 17 anos - Juvenil B
// Maiores de 18 anos (inclusive) - Adulto

function checkAge(age) {
  if (age >= 5 && age <= 7) {
    return "Infantil A";
  } else if (age >= 8 && age <= 10) {
    return "Infantil B";
  } else if (age >= 11 && age <= 13) {
    return "Juvenil A";
  } else if (age >= 14 && age <= 17) {
    return "Juvenil B";
  } else if (age >= 18) {
    return "Adulto";
  } else {
    return "Não se enquadra em nenhuma categoria";
  }
}

console.log(checkAge(12));
