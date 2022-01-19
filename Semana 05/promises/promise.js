export const promise = new Promise((resolve, reject) => {
  const string1 = "otterwise";
  const string2 = "otterwise";
  if (string1 === string2) {
    setTimeout(() => {
      resolve("Deu bom");
    }, 300);
  } else {
    setTimeout(() => {
      reject("Erro");
    }, 300);
  }
});
