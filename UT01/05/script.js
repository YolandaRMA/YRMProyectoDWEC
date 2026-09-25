class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    showObjeto(){
        console.log("Nombre: "+this.nombre+" Precio: "+this.precio )
    }
}

let teclado=new  Producto("teclado",29.99,15);
let raton=new  Producto("raton",14.50,30);

//mostrar la suma de los stocks:
console.log("suma de los stocks: "+(teclado.stock+raton.stock));

teclado.showObjeto();
raton.showObjeto();