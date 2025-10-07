/*let msg = ''
for (let i = 0; i < 10 ; i ++) {
    msg += i + ', '
}
console.log(msg)
OBJETIVO: Impedir que a vírgula após o último número seja imprimida*/
let msg = ''
for (let i = 0; i < 10 ; i ++) {
    if (i != 9) {
        msg += i + ', '
    } else {
        msg += i + ''
    }
    
}
console.log(msg)

