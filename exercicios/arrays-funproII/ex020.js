/*Crie um array numeros com [1, 2, 3, 4, 5]. Use splice() para remover os elementos nas
posições 1 e 2 (índices 1 e 2). Imprima os elementos removidos e o array resultante*/
let numeros = [1,2,3,4,5]
let numerosRemovidos = numeros.splice(1,2)
console.log(numerosRemovidos + '\n' + numeros)

