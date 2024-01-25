
// write a function that calculate rectangle area
// it could take 2 arguments and could be decimals up to 2 decimals
// it should return the area of the rectangle
// it should validate that the arguments are numbers
// it should validate that the arguments are positive numbers
// it should validate that the arguments are bigger than 0

// write your code here
function calcularAreaRectangulo (base, altura) {
  if (typeof base !== 'number' || typeof altura !== 'number') {
    return 'base y altura deben ser numeros'
  }
  if (base <= 0 || altura <= 0) {
    return 'The arguments should be positive numbers'
  }
  return (base * altura).toFixed(2)
}



const area = calcularAreaRectangulo(2, 3) // 6
 
console.log(area)



function calcularArea(longitud,ancho){
    if(typeof longitud == "number" && typeof ancho == "number"){
        if(longitud>0 && ancho>0){
            return longitud*ancho
        }else{
            return "no se aceptan num negativos"
        }
    }
    else{
        return "solo se aceptan numeros"
    }
}
 
console.log(calcularArea(3, 3.5566776))


function calcularArea(longitud, ancho) {
 
    const area = longitud * ancho;
 
    const areaRedondeada = Math.round(area * 100) / 100;
 
    return areaRedondeada;
}
 
const longitud = 5.671;
const ancho = 8.211;
 
const areaRectangulo = calcularArea(longitud, ancho);
console.log("El área del rectángulo es: " + areaRectangulo);