let e =  Error()
try {
    let x = u
    let y = x + 2
    console.log(y)
} catch(e) {
    console.log(e.message)
    console.log(e.name)
    console.log(e.toString())
} finally {
    console.log('Deu erro mas tamo ai')
}