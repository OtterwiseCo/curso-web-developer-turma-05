// 25 - A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de
// imposto de renda em cada uma das propostas que ela recebe. Tendo por base a
// tabela abaixo realize o cálculo do imposto de renda e informe a pessoa para
// ambas as propostas.

const clt = 3000 * 12;
const pj = 7000 * 12;

const anualSallary = pj;

console.log("Para o salário anual de: R$" + anualSallary);

if (anualSallary >= 21453.25 && anualSallary <= 32151.48) {
  console.log("R$" + (anualSallary * 7.5) / 100);
} else if (anualSallary >= 32151.49 && anualSallary <= 42869.16) {
  console.log("R$" + (anualSallary * 15) / 100);
} else if (anualSallary >= 42869.17 && anualSallary <= 53565.72) {
  console.log("R$" + (anualSallary * 22.5) / 100);
} else if (anualSallary > 53565.72) {
  console.log("R$" + (anualSallary * 27.5) / 100);
} else {
  console.log("está isento");
}
