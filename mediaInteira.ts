const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let linhas = input.trim().split("\n");
let A = parseInt(linhas[0]);
let B = parseInt(linhas[1]);

let mediaInteira = Math.floor((A + B) / 2);
console.log(mediaInteira);
