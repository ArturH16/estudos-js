/*function testeEscopo() {
    let soma = 2 + 6
    console.log('A soma é ' + soma)
}
testeEscopo()
try {
    console.log('O dobro da soma é ' + soma)
} catch(error) {
    console.log(error.message)
}*/
/*let funcao ;
function funcaoExterna() {
    console.log('Função Externa')
    function funcaoInterna() {
        console.log('Função Interna')
    }
    funcao = funcaoInterna()
}

funcaoExterna()
funcao()*/
//Aqui, o primeiro console.log vai ser mostrado normalmente; já o segundo, vai dar erro de referência, já que o seu escopo está definido dentro da função funcaoExterna
//Porém, há formas de escapar do Closure (característica do JS)


function executarEval() {
    eval('x= 3; y = 4; console.log(x + y)')
}

//executarEval()
//console.log(executarEval.length)
executarEval.prototype.utilidade = true
//console.log(executarEval.utilidade)

//console.log(isFinite('4'))
//console.log(isFinite(4))
//console.log(isFinite('4a'))
//console.log(isFinite('a'))
//console.log(parseFloat('2'))
//console.log(parseInt('10',2))
//console.log(parseInt('10.9'))


let soma = () => { return 5 + 2 }
console.log(soma.toString())
