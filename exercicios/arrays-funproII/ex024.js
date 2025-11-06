/*Crie um array tarefas com ["tarefa1", "tarefa2", "tarefa3", "tarefa4", "tarefa5"]. Use splice()
para remover 2 elementos a partir do índice 1 e adicionar "novaTarefa1" e "novaTarefa2" no lugar.
Imprima os elementos removidos e o array final.*/
let tarefas = ['tarefa1','tarefa2','tarefa3','tarefa4','tarefa5']
let numerosRemovidos = tarefas.splice(1,2,'novaTarefa1','novaTarefa2')
console.log(numerosRemovidos + '\n' + tarefas)
