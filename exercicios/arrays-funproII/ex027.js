/*Crie um array lista com [3, 1, 4, 1, 5, 9, 2, 6]. Ordene em ordem crescente, depois remova o
primeiro e o último elemento. Imprima o resultado final.*/
let lista = [3,1,4,1,5,9,2,6]
lista.sort()
lista.shift()
lista.pop()
console.log(lista)