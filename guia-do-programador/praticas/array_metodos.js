let myArray = [1,2,'a','b']
let myArray2 = myArray.concat('M',32)
//console.log(myArray2)
let numeros =[1,2,4,5,6]
let numerosf = [1,2,'a']
function funcaonum(elem,ind,obj) {
        return typeof elem == 'number'
}
let x  = numeros.every(funcaonum)
//console.log(x)
let y = numerosf.every(funcaonum)
//console.log(y)
let numeros3 = [1,2,40,3,24,60]
function filtrarArray (elem,ind,obj)  {
    return (elem >= 18)
}
//console.log(numeros3.filter(filtrarArray))
function percorrerArray(elem,ind) {
    console.log(`Na posição ${ind}, o elemento é ${elem}`)
}
//numeros3.forEach(percorrerArray)
let myArray3 = [1,2,1,2,'3']
//console.log(myArray3.indexOf(1,1))
//console.log(myArray3.lastIndexOf(2))
let myArray4 = myArray3.join('-')
//console.log(myArray4)
//console.log(typeof myArray4)
function vezes10(elem) {
    return (elem *= 10)
    
}
let newArray = numeros.map(vezes10)
//console.log(newArray)
newArray.pop()
//console.log(newArray)
newArray.push(60)
console.log(newArray)
let fibonnaci = [1,1]
function funcaoum(v1,v2) {
    return v1 + v2
}
let a = newArray.reduce(funcaoum,100)
console.log(a)