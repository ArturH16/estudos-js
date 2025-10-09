
console.log('Entre com um número maior que 0 e menor que 11')
let x = -1
try {
    if (x <= 0) {
        throw new Error('O número deve ser maior que 0')
    } 
    if (x >= 11) {
        throw new Error('O número deve ser menor que 11')
    }
    if (isNaN(parseInt(x))) {
        throw new Error('Entre somente com um número dentro do intervalo')
    }
} catch (error) {
    console.log(error.message)
}
     finally {
    console.log('FIM DO PROGRAMA')
}