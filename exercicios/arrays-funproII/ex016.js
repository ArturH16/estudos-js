/*Crie um array numeros com [5, 2, 8, 1, 9]. Use sort() sem parâmetros. Depois, use sort()
com uma função de comparação para ordenar numericamente de forma crescente. Imprima ambos
os resultados e compare.*/


let numeros = [5,2,8,1,9]
numeros.sort()
console.log(numeros)
let numeros1 = [5,2,8,1,9]
numeros1.sort((a,b) => a -b )
console.log(numeros1)

