let c = 3;

// função impura

function soma(a, b) {
  return a + b + c;
  //     1 + 2 + 3
}

console.log(soma(1, 2));

// função pura

function soma2(a, b, c) {
  return a + b + c;
  //     1 + 2 + 3
}

console.log(soma2(1, 2, 3));
