/*

    https://www.youtube.com/watch?v=YgHQRdGZw3w

    Função: Treco de código que só é executado quando é chamado/invocado

        Função Void (vazia) ✅ 
        Função com Parâmetro (s) ✅
        Função Return ✅
        Função Arrow / Arrow Function

*/

const multi = (numero1, numero2) => {
    const multiplicacao = numero1 * numero2

    return multiplicacao
}

const multiplicacao = multi(2,5)

console.log(multiplicacao)

/*

const multi = (numero1, numero2) => numero1 * numero2

const multiplicacao = multi(2,5)               // CODIGO SIMPLIFICADO / RESUMIDO

console.log(multiplicacao)

Quando tudo é escrito na mesma linha, não é necessário escrever o return

*/