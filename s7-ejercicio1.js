// Definiciòn de la clase
class Animal {

    /**
     * Definir sus caracteristicas
     */
    nombre = null
    edad = null
    especie = null

    /**
     * Funcion especial
     * se invoca de manera automatica cuando se crear un objeto
     * se utiliza para inicializar propiedades
     */
    constructor(nombre, edad, especie) {
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
    }

    describir() {
        return `Soy ${this.nombre}, tengo ${this.edad} años y soy un ${this.especie}`;
    }
}

class Perro extends Animal {

    raza = null

    constructor( nombre, edad, especie, raza ) {
        super( nombre, edad, especie )
        //this.nombre = nombre
        this.raza = raza
    }

    ladrar() {
        console.log("Guau guau")
    }
}

class Gato extends Animal {

    maullar() {
        console.log("Miau miau")
    }
}

// INSTANCIAR -> crear un objeto de cierta clase
const perro1 = new Perro( "Max", 5, "canino", "chihuahua"  )

const descripcion = perro1.describir()

console.log(descripcion)

perro1.ladrar()


const perro2 = new Perro( "Trico", 2, "canino", "pastor alemàn"  )

const descripcion2 = perro2.describir()

console.log( descripcion2 )


let producto = {
    nombre: "computadora macbook",
    precio: 5000,
    existencia: 1
}

let producto2 = {
    nombre: "computadora mac mini",
    precio: 999,
    existencia: 1
}

producto.precio // 5000

producto2.precio // 999




// DEFINIR
function sumar(a, b) {
    return a + b
}

// INVOCAR
sumar( 2, 3 )
