<<<<<<< HEAD
const N = parseInt(input[0]);
const comandos = input[1].split(" ").map(Number);

let A = 0; 
let B = 0;

for (let i = 0; i < N; i++) {
  if (comandos[i] === 1) {
    A = 1 - A; // troca o estado de A
  } else if (comandos[i] === 2) {
    A = 1 - A; // troca o estado de A
    B = 1 - B; // troca o estado de B
  }
}

console.log(A);
=======
const N = parseInt(input[0]);
const comandos = input[1].split(" ").map(Number);

let A = 0; 
let B = 0;

for (let i = 0; i < N; i++) {
  if (comandos[i] === 1) {
    A = 1 - A; // troca o estado de A
  } else if (comandos[i] === 2) {
    A = 1 - A; // troca o estado de A
    B = 1 - B; // troca o estado de B
  }
}

console.log(A);
>>>>>>> b6780d8ec948484030cf43e1709b19b600d3548d
console.log(B);