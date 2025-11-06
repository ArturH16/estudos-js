/*Crie um array numeros com [10, 20, 30, 40]. Use shift() duas vezes. Imprima os elementos
removidos e o array final*/
let numeros = [10,20,30,40]
let elemRemovido1 = numeros.shift()
let elemRemovido2 = numeros.shift()
console.log(`Elementos Removidos: ${elemRemovido1}, ${elemRemovido2}\nNúmeros após remoções: ${numeros}`)
