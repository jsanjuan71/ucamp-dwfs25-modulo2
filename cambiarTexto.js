
const ucamper = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    curso: 'Desarrollo Web',
    pagos: {
        enero: {
            pagado: 100,
            adaudo: 0
        },
        febrero: {
            pagado: 100,
            adaudo: 0
        },
        marzo: {
            pagado: 100,
            adaudo: 0
        }
    }
}
console.log( ucamper )

console.log(document)

const secciones = document.querySelectorAll('p')
console.log(secciones)


const boton = document.querySelector('#btn_cambiar_texto')

console.log(boton)

function clickBoton(event) {
    console.log('click', event)
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = "Texto modificado por un clic"
}

boton.addEventListener('click', clickBoton)