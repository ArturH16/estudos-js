class Fila {
    constructor(array) {
        this.array = array
    }

    adicionarElem(novoElem) {
        this.array.unshift(novoElem)
    }

    removerElem() {
        this.array.pop()
    }
}

let fila = new Fila([1,2,3,4,5])
fila.adicionarElem(6)
console.log(fila)
fila.removerElem()
console.log(fila)