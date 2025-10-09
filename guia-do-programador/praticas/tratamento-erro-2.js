let e = Error()
console.log('Entre com um número maior que 0 e menor que 11')
let x = -1
try {
    if (x <= 0) {
        throw('er1')
    } 
    if (x >= 11) {
        throw('ear2')
    }
    if (isNaN(parseInt(x))) {
        throw('ear3')
    }
} catch (e) {
    if (e == 'ear1') {
        console.log('O número deve ser maior que 0')
    }
    if (e == 'ear2') {
        console.log('O número deve ser menor que 11')
    }
    if (e == 'ear3') {
        console.log('A entrada deve ser um número dentro do intervalo')
    }
} finally {
    console.log('FIM DO PROGRAMA')
}