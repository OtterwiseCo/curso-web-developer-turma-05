// console.log(window);
// console.log(document);

window.onload = () => {
  // Cria um elemento html, mas sem inserir no DOM
  const paragraph = document.createElement("p");
  paragraph.innerText = "Meu texto"; // Inserindo um valor como texto
  console.log(paragraph);

  const body = document.querySelector("body");
  console.log(body);
  body.appendChild(paragraph);

  // Retorna uma lista de elementos que tem a classe
  const boxes = document.getElementsByClassName("box");

  const box = document.querySelector(".box");
  box.innerHTML = "<p>Meu texto dentro da caixa</p>"; // Insere o valor como html

  const boxes2 = document.querySelectorAll(".box");
  console.log(boxes2);

  const boxParagraph = boxes2[1].querySelector("p");
  //   boxParagraph.remove(); // Exclui o elemento do DOM

  boxes2[1].removeChild(boxParagraph); // removendo o filho da segunda caixa

  const alert = document.querySelector(".alert");
  console.log(alert.getAttribute("class"));

  const button = document.querySelector("button");
  console.log(button.hasAttribute("disabled"));
  button.removeAttribute("disabled");
};
