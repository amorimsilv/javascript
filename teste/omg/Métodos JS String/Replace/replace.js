let txt2 = "Hello World";
txt2 = txt2.replace("Hello", "Olá");

console.log(txt2)

// A let definida como txt2, recebe (=) a string "Hello World"
// Logo abaixo, é usada a txt2.replace, que fará o seguinte: Em vez do "Hello", Será "Olá", ficando assim: Olá World

// Script Abaixo = a let txt3 esta recebendo "Hello Mundão", o if causa o seguinte evento, SE, o txt3 foi IGUAL a "Hello Mundão", o txt3 sera modificado, e a modificação será feita no "Hello", que passará para "Opa",
// SE NÃO, Se o txt3 não for igual a "Hello Mundão", o txt3 sera modificado, e a modificação será feita também no "Hello", so que agora sera mudado de "Hello" para "Oi";

let txt3 = "Hello Mundão"
if (txt3 == "Hello Mundão") {
    txt3 = txt3.replace("Hello", "Opa");
} else {
    txt3 = txt3.replace("Hello", "Oi");
}

console.log(txt3)