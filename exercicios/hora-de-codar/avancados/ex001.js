/* Neste exercício, você deve criar uma função em JavaScript para calcular o n-ésimo número na sequência de Fibonacci.

A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois precedentes. Ela começa normalmente com 0 e 1. Os primeiros números da sequência são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, e assim por diante.

Seu objetivo é criar uma função chamada fibonacci, que aceite um número inteiro positivo n como argumento e retorne o n-ésimo número na sequência de Fibonacci.*/

let penultimo = 0
let valores = 1
let ultimo = 0
let antepenultimo = 0
while (valores <= 5) {
    if (valores == 1 || valores == 2) {
        console.log(1)
    } else {
        penultimo = valores 
        antepenultimo = valores --
        ultimo = penultimo + antepenultimo

    }
    valores ++
}