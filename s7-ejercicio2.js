
class Producto {
 
    nombre = null
    precio = null
    cantidad = null
     
        constructor(nombre, precio, cantidad) {
          this.nombre = nombre;
          this.precio = precio;
          this.cantidad = cantidad;
        }
     
        vender(total) {
            if(this.cantidad!=0 && this.cantidad>total){
            this.cantidad = this.cantidad -total
            console.log("--SE VENDIO LO SIGUIENTE-",this.nombre," cantidad: ",total)
            }else{console.log("--NO SE PUEDE VENDER--")}
          return this.cantidad
        }
      }
     
      const nuevoProducto = new Producto("Celular", 300, 5);
      nuevoProducto.vender(10);
      console.log("Producto: ",nuevoProducto.nombre)
      console.log("Cantidad despues de Vender: ",nuevoProducto.cantidad)
    