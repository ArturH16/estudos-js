//As propriedades do Objeto Math guardam valores de constantes matemáticas importante e entre outros
console.log(Math.SQRT2)
//OBS: método max não funciona se passarmos uma array de números como parâmetro
console.log(Math.max(1,2,3,1000))
let nums = [1,2,3,4,1000]
console.log(Math.max(nums[0], nums[1], nums[2], nums[3],nums[4]))
//Uso do método round
console.log(Math.round(2.4))
console.log(Math.round(-6.99))
//Método floor SEMPRE arrendonda para o menor inteiro
console.log(Math.floor(4.99))
console.log(Math.pow(2,10))
//O método random gera números pseudoaleatorios na faixa de 0 a 1, mas podemos aumentar essa faixa, como demonstrado abaixo
console.log(Math.random() * 10)
//Fórmula geral para gerar uma faixa de números pseudoaleatorios => numeroAleatorio[a,b] = Math.floor(Math.random() * (b - a + 1) + a)