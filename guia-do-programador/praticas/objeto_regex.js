const re = /[0-9]/
let texto = "Meu nome é Artur e eu tenho 17 anos"
console.log(re.test(texto))
//console.log(re.exec(re))
let novotexto = texto.replace(re,'*')
console.log(novotexto)
//console.log(texto.search(re))

