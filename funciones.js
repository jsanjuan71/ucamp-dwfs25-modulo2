


function sumar(operando1, operando2) {
    let suma = operando1 + operando2;
    return suma;
}

const sumarConFlecha = (operando1, operando2) => operando1 + operando2

function resta(operando1, operando2) {
    let resta = operando1 - operando2;
    return resta;
}

function mostrarResultado(resultado, idioma) {
    if(idioma == "en") {
        console.log("The result is: " + resultado);
    } else {
        console.log("El resultado es: " + resultado); 
    }
}

let resultado = sumar(3, 2);
mostrarResultado(resultado, "es");

let resutadoResta = resta(3, 5);
mostrarResultado(resutadoResta, "en");

const PI = 3.1416;

const nombre = "Julio"

const multiplicacion = function(operando1, operando2) {
    return operando1 * operando2;
}

console.log(multiplicacion)

let resultadoMultiplicacion = multiplicacion(3, 5);

console.log(resultadoMultiplicacion);





