const umDia = 86400000

let hoje = new Date()
let ano_corrente = hoje.getFullYear()
let natal = new Date(ano_corrente,11,25)
if (hoje.getTime() - natal.getTime() == 0) {
    console.log('Last Christmas, I gave my heart')
} else {
        let falta_natal = natal.getTime() - hoje.getTime()
        let diferenca = falta_natal / umDia

    console.log(`Faltam ${diferenca.toFixed(0)} dias para o Christmas`)
}