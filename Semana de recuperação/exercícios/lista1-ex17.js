// 17 - Faça um programa que receberá a hora inicial e a hora final de um jogo. A
// seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
// dia e terminar em outro, tendo uma duração máxima de 24 horas.
// Ex: Início: 22 - Término: 06 - Tempo de Duração: 8 horas

const initialHour = 10;
const finalHour = 14;

if (initialHour > finalHour) {
  console.log(
    "Tempora de duração: " + (24 - initialHour + finalHour) + " horas",
  );
} else {
  console.log("Tempora de duração: " + (finalHour - initialHour) + " horas");
}
