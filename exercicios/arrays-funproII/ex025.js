/*Crie um array vazio stack. Simule uma pilha (LIFO - Last In, First Out) usando push() para
adicionar 10, 20, 30 e depois pop() para remover e imprimir cada elemento.*/
let stack =  []
stack.push(10,20,30)
let elemRemovido1 = stack.pop()
let elemRemovido2 = stack.pop()
let elemRemovido3 = stack.pop()
console.log(`Elementos removidos: ${elemRemovido1}, ${elemRemovido2}, ${elemRemovido3}`)

