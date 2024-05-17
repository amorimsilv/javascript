// https://www.youtube.com/watch?v=OJc8XYbbwS0

// Objetos
// Objetos são basicamente variáveis com muitos valores dentro.

// Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

// Os valores dentro de um objeto são chamados propriedades.

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function() { alert('Biiiiiiiiiiiii') },
    completo: function() {
        return "A marca é " +this.marca+ " e o modelo é: " +this.modelo
    }
}

console.log(carro)
console.log(carro.completo())