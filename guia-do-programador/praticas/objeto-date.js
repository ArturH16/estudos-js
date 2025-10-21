let d = new Date()
console.log(d)
let d2 = new Date(267869580)
let d3 = new Date(-5678940395)
//Instanciando os objetos Date com um argumento, ele vai retornar as informações sobre o dia, mes, hora se baseando na data padrão 1 de janeiro de 1970; valores negativos indicam datas anteriores a essa data
//console.log(`Data futura: ${d2}\nData passada: ${d3}`)
//Podemos passar dentro do construtor Date uma string, seguindo as regras de formatação que vai indicar uma data hora. Nesse exemplo, usarei a formatação aaa/MM/dd/ (hh:min:seg)
let data = '2008/02/21'
let data1 = new Date(data)
console.log(data1)

