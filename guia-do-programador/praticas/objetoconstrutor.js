function Cillindro(r,h,u) {
    this.raioBase = r
    this.altura = h
    this.unidadeMedida = u
    this.areaBase = function areaBase () {
    return Math.PI * Math.pow(this.raioBase,2)
}
    this.volumeBase = function volumeBase() {
        return this.areaBase() * this.altura }
    this.areaLateral = function areaLateral () {
        return  2 * Math.PI * this.raioBase * this.altura
    }
    this.areaTotal = function areaTotal () {
        return 2 * this.areaBase() + this.areaLateral()
    }
    }




let cillindro1 = new Cillindro(3,10,'m')
console.log(`Raio da Base: ${cillindro1.raioBase}\nAltura: ${cillindro1.altura}\nÁrea da Base: ${cillindro1.areaBase().toFixed(2)}\nÁrea Lateral: ${cillindro1.areaLateral()}\nÁrea Total: ${cillindro1.areaTotal()}\nVolume: ${cillindro1.volumeBase()}`)