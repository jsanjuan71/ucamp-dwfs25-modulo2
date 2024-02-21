class Libro {
    titulo = null
    autor = null
    año = null
    disponible = null

        constructor(titulo, autor, año, disponible) {
            this.titulo = titulo;
            this.autor = autor;
            this.año = año;
            this.disponible = disponible;
  }
  prestar(total) {
    if(this.disponible!=0 && this.disponible>total){
    this.disponible = this.disponible -total
        console.log("Disponible para prestamo",this.titulo," cantidad: ",total)
       }else{console.log("No hay titulos disponibles")}
       return this.disponible
   }
}
  
  class Biblioteca {

    agregarLibro(nuevoLibro) {
        if( typeof(nuevoLibro === "object")) {
            Biblioteca.push( nuevoLibro )
        } else {
            console.warn( "Solo se aceptan objetos como libro" )
        }
    }

}
    
    buscarPorLibro(titulo,string) 
    // no supe como invocar para que me devuelva la lista de libros que coincidan con el titulo proporcionado

    prestarLibro(titulo,string)
    // tampoco supe que hacer aqui 
     
  class LibroInfantil extends Libro {
    edadMinima = null

    constructor( titulo, año, autor, disponible, edadMinima ) {
        super( titulo, año, autor, disponible, edadMinima )
        
        this.edadMinima = edadMinima
    }
  }
  
  // Crea una instancia de Biblioteca y añade algunos libros
const libro1 = new Libro( "Fahrenheit 451", "Ray Bradbury", 1953, 3 )

const descripcion = libro1.describir()

console.log(descripcion)

const libro2 = new Libro( "Sapiens", "Yuval Noah Harari", 2013, 4 )

const descripcion2= libro2.describir()

console.log( descripcion2 )


let libro1 = {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    año: 1953,
    disponible: 3
}

let libro2 = {
    titulo: "Sapiens",
    autor: "Yuval Noah Harari",
    año: 2013,
    disponible: 4
}
