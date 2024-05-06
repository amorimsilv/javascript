/*

    https://www.youtube.com/watch?v=YgHQRdGZw3w

    Função: Treco de código que só é executado quando é chamado/invocado

        Função Void (vazia) ✅
        Função com Parâmetro (nomeDaPessoa / numero1, numero2) ✅
        Função Return
        Função Arrow / Arrow Function

*/


function mostraNome(nomeDaPessoa) { // Essa função também é uma função vazia, então ela é uma função com parâmetro e ao mesmo tempo uma função vazia
    
    console.log(nomeDaPessoa)
}

mostraNome("Matheus")
mostraNome("Eu chamei a mesma função duas vezes") 

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


function soma(numero1, numero2) {
    
    const somaDosNumeros = numero1 + numero2

    console.log(somaDosNumeros)
}

soma(10,4) // Pegou o numero1 e o numero2 e somou, o soma(10,4 e o 2,5) forçaram para que seja a soma com aqueles numeros que estao dentro do soma()
soma(2,5)