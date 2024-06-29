/* let txt = "We are \"Vikings\"";
alert(txt); */

let txt = "Hello World!";
txt = txt.toUpperCase();

console.log(txt)

// o slice usado, traduz para fatiar, usado abaixo, serve para separar uma palavra, então contou 10 palavras até chegar na primeira letra da banana "b" e depois o final de "babanas" que acaba depois de 17 palavras contadas

let txt1 = "I can eat bananas all day";
let x = txt1.slice(10, 17);

console.log(x)

let txt2 = "Hello World";
txt2 = txt2.replace("Hello", "Olá");

console.log(txt2)

// Script Abaixo = a let txt3 esta recebendo "Hello Mundão", o if causa o seguinte evento, SE, o txt3 foi IGUAL a "Hello Mundão", o txt3 sera modificado, e a modificação será feita no "Hello", que passará para "Opa",
// SE NÃO, Se o txt3 não for igual a "Hello Mundão", o txt3 sera modificado, e a modificação será feita também no "Hello", so que agora sera mudado de "Hello" para "Oi";

let txt3 = "Hello Mundão"
if (txt3 == "Hello Mundão") {
    txt3 = txt3.replace("Hello", "Opa");
} else {
    txt3 = txt3.replace("Hello", "Oi");
}

console.log(txt3)



// Abaixo é feito uma lista com os carros populares, cada um tendo seu espaço, na let é pedida o carro favorito do usuario 1, então logo após, a let volta pro nome da const, e declara que é o quarto carro (lembrando que a contagem inicia em 0, e não em 1)

/*const favoritecars = ["Lamborghini", "BMW", "McLaren", "Ferrari", "Porsche", "Corvette"]
let favoritecarsuser1 = favoritecars[4];

console.log(favoritecarsuser1) */


const favoritecars = ["Lamborghini", "BMW", "McLaren", "Ferrari", "Porsche", "Corvette"];
    console.log('Escolha seu carro favorito!');

    console.log(favoritecars)

function carrosfavoritos() {
    let x = cars[1];
    
}