let livro = new Object()
livro.titulo = 'Ajax com jQuery'
livro.autor = 'Mauricio Samy Silva'
livro.paginas = 432
livro.preco = 'R$ 69,00'
livro.freteSedex = function(ceporigem, cepdestino, peso) {
    let valorFrete = ''
    //script do cálculo do frete
    return valorFrete
}
let pares = ''
for (let i in livro) {
    pares += `${i}: ${livro[i]}\n`
}
console.log(pares)

//Colocando um objeto dentro de outro
livro.capitulos = new Object()
livro.capitulos.capitulo1 = 'Revisão do AJAX'
livro.capitulos.capitulo2 = 'Funções para requisições AJAX'
livro.capitulos.capitulo3 = 'Eventos e miscelânea'
livro.capitulos.capitulo4 = 'Requisições XML'
livro.capitulos.capitulo5 = 'Introdução ao formato JSON'
livro.capitulos.capitulo6 = 'Requisições JSON'
console.log(`Capitulo 6: ${livro.capitulos.capitulo6}`)
let pares1= ''
for (let prop in livro) {
    if (typeof(livro[prop]) == 'object') {
        for (let prop1 in livro[prop]) {
            pares1 += `${prop1}: ${livro[prop][prop1]}\n`
        }
        
    } else {
        pares1 += `${prop}: ${livro[prop]}\n`
    }
}
console.log(pares1)