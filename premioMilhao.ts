<<<<<<< HEAD
const N = parseInt(input[0]);
const acessos = input.slice(1).map(Number);

let soma = 0;
let dias = 0;

for (let i = 0; i < N; i++) {
  soma += acessos[i];
  dias++;
  if (soma >= 1000000) {
    break;
  }
}

=======
const N = parseInt(input[0]);
const acessos = input.slice(1).map(Number);

let soma = 0;
let dias = 0;

for (let i = 0; i < N; i++) {
  soma += acessos[i];
  dias++;
  if (soma >= 1000000) {
    break;
  }
}

>>>>>>> b6780d8ec948484030cf43e1709b19b600d3548d
console.log(dias);