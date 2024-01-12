


function manejoTienda( inventario ) {


    function agregarProducto(nuevoProducto) {
        if( typeof(nuevoProducto)  === "object" ) {
            inventario.push( nuevoProducto )
        } else {
            console.warn( "Solo se aceptan objetos como producto" )
        }
    }

    function calcularValorTotal() {
        let constoTotal = 0
        inventario.forEach( function(elemento) {

        } )
    }

    function obtenerPorNombre(nombre) {
        //
    }

    function mostrarInventario() {
        inventario.forEach( function(elemento, posicion) {
            console.log( posicion + 1 +"-", elemento)
        } )

    }

    function limpiarPelo() {

    }

    function lavarDentadura() {

    }

    function secar(){

    }

    function asearMascota() {
        limpiarPelo()
        lavarDentadura()
        secar()
    }

    return {
        "agregarProducto": agregarProducto,
        "calcularValorTotal": calcularValorTotal,
        "mostrarInventario": mostrarInventario,
        "asearMascota": asearMascota
    }

    const estatura = 171

    return {
        "nombre" :  "julio",
        "edad" : 32,
        "estatura" : estatura
    }
}



const inventario = []

const producto = {
    nombre: 'camisa',
    precio: 100,
    existensia: 10,
    categoria: "ropa"
}

inventario.push( producto )


inventario.push( {
    nombre: 'celular',
    precio: 1009,
    existensia: 2,
    categoria: "tecnologia"
}, {
    nombre: 'playera',
    precio: 500,
    existensia: 20,
    categoria: "ropa"
} )

inventario.push( 1, 2, 4 )

//console.log( inventario )


const tienda = manejoTienda( inventario )

tienda.agregarProducto(3)

tienda.mostrarInventario()







/*
hora de salida

horaDeSalida -> camel case

peso = 70

hora_de_salida -> snake case

*/