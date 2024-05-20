const objs = [
    {
        nome: 'Matheus',
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'Empressa X',
        },
        hobbies: ['Programar', 'Correr', 'Ler'],
    },

    {
        nome: 'João',
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ['Jogar', 'Academia'],
    }
]

// JSON
// Converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Converter JSON para OBJETO

const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
});