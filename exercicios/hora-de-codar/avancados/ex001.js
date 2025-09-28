/* Neste exercício, você deve criar uma função em JavaScript para calcular o n-ésimo número na sequência de Fibonacci.

A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois precedentes. Ela começa normalmente com 0 e 1. Os primeiros números da sequência são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, e assim por diante.

Seu objetivo é criar uma função chamada fibonacci, que aceite um número inteiro positivo n como argumento e retorne o n-ésimo número na sequência de Fibonacci.*/

function fibonacci(n) {
    valores = 0
    let fibonacci = [0,1]
while (valores <= n) {
    if (valores == 0 || valores == 1) {
    } else {
        fibonacci[valores] = fibonacci[valores - 1] + fibonacci[valores - 2]
    
    }
    valores ++
}
 return fibonacci[n]
}

 let posicao = fibonacci(5)
 console.log(posicao)