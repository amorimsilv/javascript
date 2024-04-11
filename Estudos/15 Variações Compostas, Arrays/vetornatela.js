let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Ordenar os valores

//console.log(valores)

/* for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) { // Para cada posição dentro de num (for = para, in = dentro)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Eu vou mostrar o num pos
}

// Esse codigo acima é o mais simplificado

