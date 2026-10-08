class Item {
    constructor(nombre, descripcion, cantidad, maxStack) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this._cantidad = cantidad;//para que pase por el setter y se controle que no sea negativa ni supere maxStack
        this.maxStack = maxStack;
    }

    set cantidad(valor) {
        if (valor < 0) {
            this._cantidad = 0;
        } else if (valor > this.maxStack) {
            this._cantidad = this.maxStack;
        } else {
            this._cantidad = valor;
        }
    }

    get cantidad() {
        return this._cantidad;
    }

    mostrarInfo() {
        return "${this.nombre} - ${this.descripcion} - Cantidad: ${this.cantidad}/${this.maxStack}";
    }
}
// let inventario =new Array(9).fill().map(x=> new)
let inventario = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
];
inventario[0][0] = new Item("Piedra", "Arma de piedra", 32, 64);
inventario[0][1] = new Item("Antorcha", "Utensilio para alumbrar", 20, 64);
inventario[1][3] = new Item("Manzana", "Alimento", 10, 64);
inventario[2][4] = new Item("Espada de diamante", "Arma", 1, 1);
inventario[3][2] = new Item("Pico de hierro", "Herramienta", 1, 1);

function mostrarInventario() {
    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna <inventario.length; columna++) {
            if (inventario[fila][columna] != null) { //evita mostrar info de null?
                console.log(inventario[fila][columna].mostrarInfo());
            }
        }

    }
}

function mostrarBarraAccesos() {
}

function buscarObjeto() {
}

function anadirObjeto() {
    //comprobar si ya existe el nombre,si coincide no pedir descripcion,max....
}
//se aconseja añadir cantidadHastaElMaximo y añadirCantidadAHuecoVacio
//buscarItemPorNombre (no solo buscar de case)
//buscar en x e y para uso despues
//cuando usuario añada item pasar todo a minus-mayus aunque muestre luego 1a mayuscula

function moverObjeto() {
}

function eliminarObjeto() {
}

function contarHuecosLibres() {
}

function obtenerObjetoMasAbundante() {
}
let opcion;

do {
    opcion = Number(prompt("1 Mostrar inventario completo.\n" +
        "2 Mostrar barra accesos rápidos\n" +
        "3 Buscar objeto\n" +
        "4 Añadir objeto al inventario\n" +
        "5Mover objeto\n" +
        "6 Eliminar objeto\n" +
        "7 Mostrar huecos libres\n" +
        "8 Mostrar el objeto más abundante\n" +
        "0 Salir\n" +
        "Introduce una opción:"
    ));

    switch (opcion) {
        case 1:
            mostrarInventario();
            break;
        case 2:
            mostrarBarraAccesos();
            break;
        case 3:
            buscarObjeto();
            break;
        case 4:
            anadirObjeto();
            break;
        case 5:
            moverObjeto();
            break;
        case 6:
            eliminarObjeto();
            break;
        case 7:
            contarHuecosLibres();
            break;
        case 8:
            obtenerObjetoMasAbundante();
            break;
        case 0:
            alert("Saliendo del inventario...");
            break;
        default:
            alert("Opción incorreta!");
    }

} while (opcion !== 0)

