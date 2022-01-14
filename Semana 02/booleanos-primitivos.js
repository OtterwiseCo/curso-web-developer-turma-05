if ("") {
  console.log("deu bom string vazia");
}

if ("alguma coisa") {
  console.log("deu bom string com conteudo");
}

if (null) {
  console.log("Não vai aparecer por null é falso");
}

if (undefined) {
  console.log("Não vai aparecer por undefined é falso");
}

if (0) {
  console.log("Não vai aparecer por 0 é falso");
}

const array = [];

if (!array.length) {
  console.log("Array está vazio");
}
