
const X = parseInt(input);
const divisores = [];

for (let i = 1; i <= Math.sqrt(X); i++) {
  if (X % i === 0) {
    divisores.push(i);
    if (i !== X / i) {
      divisores.push(X / i);
    }
  }
}

divisores.sort((a, b) => a - b);
console.log(divisores.join(" "));
