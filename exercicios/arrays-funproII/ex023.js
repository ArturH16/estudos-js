/*Crie um array numeros com [1, 2, 5, 6]. Use splice() para adicionar 3 e 4 entre o 2 e o 5 (na
posição 2, sem remover nada). Imprima o array completo.*/
let numeros = [1,2,5,6]
numeros.splice(2,0,3,4)
console.log(numeros)