const carrosFavoritos = ["Lamborghini Evo Spyder", "Ferrari 488", "Porsche GT3 RS", "BMW M5", "Civic G10"]
                                // 0                    // 1             // 2         // 3        // 4
carrosFavoritos.splice(3,4)

console.log(carrosFavoritos)

// na Const carrosFavoritos, são adicionados 5 tipos de carros diferentes, logo abaixo, o comando splice é executado, fazendo com que os dois ultimos (3 e 4) items sejam removidos, ao apertar f8, pode-se perceber que só mostra os 3 primeiros

// Único ruim deste comando é que, se trocar o 3 e o 4, por 1 e 4, ele vai remover do 1 até o 4, traduzindo, só sobrará a Lamborghini Evo Spyder