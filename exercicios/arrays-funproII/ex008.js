/*Crie um array historico com ["ação1", "ação2", "ação3"]. Faça um loop que use pop() para
remover e imprimir cada elemento até o array ficar vazio.*/
let historico = ['ação1','ação2','ação3']
for (let v = historico.length - 1; historico.length != 0; v --) {
    console.log(historico.pop())
}
console.log(historico)