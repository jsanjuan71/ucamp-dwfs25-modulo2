
function crearUsuario( nombre, apellido, correo_electronico, ocupacion, edad ) {
    const usurio = {
        name: nombre.toUpperCase(),
        lastname: apellido.toUpperCase()  ,
        email: correo_electronico,
        job: "El/la " + ocupacion,
        age: edad
    }

    return usurio
}

const usuario1 = crearUsuario( "juan", 'Perez', 'juanp“@gmail.com', 'programador', 22 )

console.log( usuario1 )


const usuario2 = crearUsuario( "Alma", 'Sanchez', 'almas@gmail.com', 'diseñadora web', 18 )

console.log( usuario2 )

