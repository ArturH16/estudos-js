/*Crie um array misturado com ["10", "2", "30", "4"]. Observe que são strings. Use sort() e
veja o resultado. Depois converta para números e ordene corretamente.*/
let numerostxt = ['10','2','30','4']
numerostxt.sort()
console.log(numerostxt)
let numeros = []
for(let v = numerostxt.length - 1; v >= 0; v --) {
    if (isFinite(v)) {
        let valorRemovido = numerostxt.pop()
        let novoValor = Number(valorRemovido)
        numeros.unshift(novoValor)

    }
}
numeros.sort((a,b) => a -b)
console.log(numeros)