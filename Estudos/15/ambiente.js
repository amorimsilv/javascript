let num = [5, 8, 2, 9, 3]

num.push(1) // Adicionando o valor 1 no vetor

// num.sort() // Vai colocar os valores do vetor em ordem, ficando em vez de 5, 8, 2, 9, 3, ficar 2, 3, 5, 8, 9

console.log(num)

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições.`) // Vai mostrar quantas posições, quantos elementos tem o num, o vetor

// console.log(num[0]) // Vai mostrar quem é o num na posição 0
console.log(`O primeiro valor do vetor é ${num[0]}`) // Segundo exemplo

let  pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}




