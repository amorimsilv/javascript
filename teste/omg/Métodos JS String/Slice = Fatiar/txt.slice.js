// o slice usado, traduz para fatiar, usado abaixo, serve para separar uma palavra, então contou 10 palavras até chegar na primeira letra da banana "b" e depois o final de "babanas" que acaba depois de 17 palavras contadas

let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);

console.log(x)