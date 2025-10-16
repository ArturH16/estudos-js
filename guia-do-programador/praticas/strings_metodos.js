let nome = 'Artur'
//O método charAt retorna o caracter que está no índice passado como parâmetro
//console.log(nome.charAt(3))
//console.log(nome.charCodeAt(3))
//O método concat concatena uma ou mais strings a outra string, sem alterar a string original
let amigos = nome.concat('Arthur','Neymar')
console.log(amigos)
//O método indexOf retorna o índice da primeira ocorrência da substring, podendo ser passado como parâmetro opcional o ínicio da busca (caso não seja encontrado a substring, retorna -1)
//console.log(nome.indexOf('tur'))
//console.log(nome.indexOf('tur',4))
//console.log(nome.lastIndexOf('r'))
//Método replace substitui uma substring de uma string e adiciona outra definida no segundo parâmetro (pode ser uma função que retorna um valor)
//console.log(nome.replace('rt','burro'))//
function x() {
    return 'aguia'
}
//console.log(nome.replace('rt',x()))
//Método slice gera uma nova string a partir de um índice e como opcional, pode ser passado o índice final para extração da substring (não incluso)
//console.log(amigos.slice(5,11)
//Método split cria uma array de substrings a partir do separador passado, e o segundo parâmetro define quantos itens terá a array
//console.log(amigos.split('A'))
console.log(amigos.substring(4,2)) //No método substring, se o primeiro índice for maior que o segundo, inverte-se a ordem de extração
