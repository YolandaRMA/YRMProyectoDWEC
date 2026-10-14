class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        // El precio se almacena en la propiedad interna _precio
        this._precio = precio;
        this.stock = stock;
    }
     get precio() {
        return this._precio;
    }
     //permite modificar el precio validando su valor
     //si se intenta establecer un precio negativo muestra mensaje y conserva el precio anterior
    set precio(precio) {
        if (precio >= 0) {
            this._precio = precio;
        } else {
            console.log("El precio no puede ser negativo.");
        }
    }
    // Muestra nombre y precio 
    showObjeto(){
        console.log("Nombre: "+this.nombre+" Precio: "+this.precio )
    }
    //Muestra nombre precio y stock
     mostrarProducto() {
        console.log("Nombre: " + this.nombre);
        console.log("Precio: " + this.precio);
        console.log("Stock: " + this.stock);
    }
    // Calcula y muestra el valor total del stock
    // Multiplica el precio por las unidades disponibles.
    calcularValorStock() {
        console.log("Valor total del stock de " + this.nombre + ": " +
            (this.precio * this.stock));
    }
}

// Se crean los dos objetos utilizando la clase Producto
let teclado = new Producto("Teclado", 29.99, 15);
let raton = new Producto("Ratón", 14.50, 30);

//mostrar la suma de los stocks:
console.log("suma de los stocks: "+(teclado.stock+raton.stock));
// Se llama al método showObjeto() de cada producto.
teclado.showObjeto();
raton.showObjeto();

// Se muestra el nombre, el precio y el stock de cada producto
teclado.mostrarProducto();
raton.mostrarProducto();

// Se calcula el valor del stock de cada producto.
teclado.calcularValorStock();
raton.calcularValorStock();

// Se guardan los objetos en un array para recorrerlos fácilmente.
let productos = [teclado, raton];

// El bucle for...of recorre directamente los elementos del array.
console.log("TODOS LOS PRODUCTOS:");
for (let producto of productos) {
    producto.mostrarProducto();
}

// Se muestran únicamente los productos cuyo stock es mayor que cero.
console.log("PRODUCTOS CON STOCK:");
for (let producto of productos) {
    if (producto.stock > 0) {
        producto.mostrarProducto();
    }
}

let sumaPrecios = 0;
// Se suman los precios de todos los productos.
for (let producto of productos) {
    sumaPrecios = sumaPrecios + producto.precio;
}

// La propiedad length indica cuántos elementos tiene el array.
let precioMedio = sumaPrecios / productos.length;
console.log("Precio medio: " + precioMedio.toFixed(2));

// Se toma el primer producto como el más caro inicialmente.
let productoMasCaro = productos[0];

// Se comparan los precios del resto de los productos.
for (let producto of productos) {
    if (producto.precio > productoMasCaro.precio) {
        productoMasCaro = producto;
    }
}
console.log("Producto más caro: " + productoMasCaro.nombre);
console.log("Precio: " + productoMasCaro.precio);

// Se multiplica cada precio por 1.10 para aumentarlo un 10 %.
for (let producto of productos) {
    producto.precio = producto.precio * 1.10;
}

// Se comprueba que los precios han aumentado un 10 %.
console.log("PRODUCTOS CON LOS PRECIOS ACTUALIZADOS:");
for (let producto of productos) {
    producto.mostrarProducto();
}