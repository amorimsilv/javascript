/*

https://www.youtube.com/watch?v=HXnQAt0CXFE

I - Immediately
I - Invoked
F - Function
E - Expression

(pt-br) Expressão de função imediatamente invocada

Exemplo de sintase:

function() {
    codig
})();

*/

const resultado = (function () {
    const meuNome = "Matheus"
    return meuNome
})()

console.log(resultado)
