
let total = 0;

for (let i = 1; i < input.length; i++) {
  const [L, C] = input[i].split(' ').map(Number);
  if (L > C) total += C;
}

console.log(total);
