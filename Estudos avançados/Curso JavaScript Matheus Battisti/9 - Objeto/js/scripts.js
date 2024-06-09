var obj = {
    nome: "Matheus",
    idade: 17,
    profissao: null,
    estaTrabalhando: false,
};

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)
console.log(obj.idade)

console.log("O meu nome é " + obj.nome)

obj.idade = 19;

console.log(obj.idade)
console.log(obj)

obj.estudando = true;

console.log(obj)