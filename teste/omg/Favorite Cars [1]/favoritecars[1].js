// Abaixo é feito uma lista com os carros populares, cada um tendo seu espaço, na let é pedida o carro favorito do usuario 1, então logo após, a let volta pro nome da const, e declara que é o quarto carro (lembrando que a contagem inicia em 0, e não em 1)

/*const favoritecars = ["Lamborghini", "BMW", "McLaren", "Ferrari", "Porsche", "Corvette"]
let favoritecarsuser1 = favoritecars[4];

console.log(favoritecarsuser1) */


const favoritecars = ["Lamborghini", "BMW", "McLaren", "Ferrari", "Porsche", "Corvette"];
    console.log('Escolha seu carro favorito!');

    console.log(favoritecars)

function carrosfavoritos() {
    let xz = favoritecars[1];

    if (xz == favoritecars[1]) {
        console.log(`Your Favorite Car is ${favoritecars[5]}`)
    } else {
        console.log(`Your Favorite Car is ${favoritecars[4]}`)
    }
}

console.log(carrosfavoritos())