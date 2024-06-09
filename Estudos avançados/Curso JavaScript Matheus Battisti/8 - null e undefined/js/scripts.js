// Hoisting - içamento - Lido de cima pra baixo, o sobrenome vai da undefined pois o var que declara o sobrenome está la embaixo, o certo que estivesse acima desse console.log abaixo.
console.log(sobrenome);

var nome = null;
var sobrenome = "Amorim";

console.log(nome)
console.log(sobrenome)

nome = "Matheus";

console.log(nome)
