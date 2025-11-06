/*Crie um array dados com ["z", "a", "m", "b"]. Ordene alfabeticamente, adicione "x" no início e "c"
no final. Imprima o array resultante.*/
let dados = ['z','a','m','b']
dados.sort()
dados.unshift('x')
dados.push('c')
console.log(dados)