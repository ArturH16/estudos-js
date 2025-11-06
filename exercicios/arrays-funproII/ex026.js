/*Crie um array vazio queue. Simule uma fila (FIFO - First In, First Out) usando push() para
adicionar "pessoa1", "pessoa2", "pessoa3" e depois shift() para atender (remover e imprimir)
cada pessoa.*/
let queue = []
queue.push('pessoa1','pessoa2','pessoa3')
let elemRemovido1 = queue.shift()
console.log(`Pessoa atendida: ${elemRemovido1}`)
let elemRemovido2 = queue.shift()
console.log(`Pessoa atendida: ${elemRemovido2}`)
let elemRemovido3 = queue.shift()
console.log(`Pessoa atendida: ${elemRemovido3}`)



