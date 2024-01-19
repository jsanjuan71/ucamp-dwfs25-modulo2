
class Vehiculo {

    estado = "detenido"      // estado por defecto

    estaDetenido = true  // 

    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anioFabricacion = anio;
    }

    arrancar() {
        this.estado = "encendido"
        this.estaDetenido = false
    }


    detener() {
        this.estado = "detenido"
    }

    toString() {
        return `Vehiculo: ${this.marca} ${this.modelo} año ${this.anioFabricacion} esta ${this.estado}`
    }
}

// DEBUG -> formateador

const vehiculo_mazda = new Vehiculo("Mazda", "3", 2020)

console.log( "Vehiculo: " + vehiculo_mazda )

vehiculo_mazda.arrancar()

console.log("El vehiculo esta: ", vehiculo_mazda.estado)

vehiculo_mazda.detener()

console.log("El vehiculo esta: ", vehiculo_mazda.estado)
