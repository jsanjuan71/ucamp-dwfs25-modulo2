


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
        // Obtener el producto con el nombre que se recibe como parametro
        for(const producto of inventario) {
            if( producto.nombre === nombre ) {
                return producto
            }
        }
        return null
    }

    function mostrarInventario() {
        inventario.forEach( function(elemento, posicion) {
            console.log( posicion + 1 +"-", elemento)
        } )

    }

    function eliminarProducto(nombre) {
        // Elminar el producto con el nombre que se recibe como parametro
        const producto = obtenerPorNombre(nombre)
        if( producto ) {
            const posicion = inventario.indexOf( producto )
            inventario.splice( posicion, 1 )
        } else {
            console.warn( "No se encontro el producto" )
        }
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
        "asearMascota": asearMascota,
        eliminarProducto
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

console.log( "Eliminar el producto: celular" )
tienda.eliminarProducto("celular")

tienda.mostrarInventario()

console.log( "Agregar el producto: laptop" )
tienda.agregarProducto({
    nombre: 'laptop',
    precio: 20000,
    existensia: 1,
    categoria: "computacion"
})

tienda.mostrarInventario()





/*
hora de salida

horaDeSalida -> camel case

peso = 70

hora_de_salida -> snake case

*/