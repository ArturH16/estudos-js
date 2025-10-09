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
livro.capitulo1 = 'Revisão do AJAX'
livro.capitulo2 = 'Funções para requisições AJAX'
livro.capitulo3 = 'Eventos e miscelânea'
livro.capitulo4 = 'Requisições XML'
livro.capitulo5 = 'Introdução ao formato JSON'
livro.capitulo6 = 'Requisições JSON'
let nomeAutor = livro.autor
let capituloCinco = livro.capitulo5
let valorFrete = livro.freteSedex(22050047,69190120,1060)
console.log(`Autor: ${nomeAutor}\nCap 5: ${capituloCinco}\nValor frete: ${valorFrete}`)