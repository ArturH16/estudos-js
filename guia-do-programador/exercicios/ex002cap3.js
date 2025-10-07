let par = ''
for ( let p = 0; p <= 20; p += 2) {
    if (p != 20) {
        par += p + ','
    } else {
        par += p
    }
}
console.log(par)