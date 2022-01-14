// O que é uma função?

// Lógica isolada
// Deve ser definida da forma mais pura possível
// Reutilizável

// Função pura = dado um numero de entradas como parametro, o resultado de execução deve ser sempre o mesmo

const meuNumero = 2; //NUNCA utilizar variaveis de fora da função para implementar lógica

function soma(a, b) {
  return a + b + meuNumero;
}

console.log(soma(2, 2));

// Arrow function

const multiplica = (a, b) => {
  // a = 2
  // b = 2
  return a * b; // retorno explicito
};

console.log(multiplica(2, 2));

// retorno implícito

const multiplica = (a, b) => /* return */ a * b;

const retornaObjeto = () => ({
  name: "joao",
});
