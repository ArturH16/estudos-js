/*Crie um array numeros com [15, 8, 23, 4, 42, 16]. Use splice() para remover os elementos das
posições 2 e 3, depois ordene o array em ordem decrescente. Imprima o resultado.*/
let numeros = [15,8,23,4,42,16]
numeros.splice(2,2)
numeros.sort((a,b) => b - a)
console.log(numeros)