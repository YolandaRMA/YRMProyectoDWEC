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

    mostrarInformacion() {
        return "${this.nombre} - ${this.descripcion} - Cantidad: ${this.cantidad}/${this.maxStack}";
    }
}


//array(4) crea un array de 4 posiciones,map recorre las posiciones y crea algo nuevo para cada una de las 4 posiciones, crea un array de 9 null.
let inventario = Array(4).fill(null).map(() => Array(9).fill(null));


inventario[0][0] = new Item("Piedra", "Arma de piedra", 32, 64);
inventario[0][1] = new Item("Antorcha", "Utensilio para alumbrar", 20, 64);
inventario[1][3] = new Item("Manzana", "Alimento", 10, 64);
inventario[2][4] = new Item("Espada de diamante", "Arma", 1, 1);
inventario[3][2] = new Item("Pico de hierro", "Herramienta", 1, 1);

function mostrarInventario() {
    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {

            if (inventario[fila][columna] == null) {
                (`Posición [${fila}][${columna}]: VACÍO`)
            } else {
                console.log(inventario[fila][columna].mostrarInformacion());
            }
        }
    }
}
/*
const mostrarInventario = () => {
    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {
            if (inventario[fila][columna] == null) {
                console.log(`Posición [${fila}][${columna}]: VACÍO`);
            } else {
                console.log(`Posición [${fila}][${columna}]: ${inventario[fila][columna].mostrarInformacion()}`);
            }
        }
    }
};
*/
function mostrarBarraAccesos() {
}

const buscarObjeto = () => {
    let nombreBuscado = prompt("Introduce el nombre del objeto:");

    if (nombreBuscado == null || nombreBuscado.trim() == "") {
        alert("Debes introducir un nombre.");
        return;
    }

    nombreBuscado = nombreBuscado.trim().toLowerCase();

    let encontrado = false;

    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {

            let item = inventario[fila][columna];

            if (item != null && item.nombre.toLowerCase() == nombreBuscado) {
                console.log(`Objeto encontrado en [${fila}][${columna}]`);
                console.log(`Nombre: ${item.nombre}`);
                console.log(`Descripción: ${item.descripcion}`);
                console.log(`Cantidad: ${item.cantidad}/${item.maxStack}`);

                encontrado = true;
            }
        }
    }

    if (!encontrado) {
        console.log("El objeto no existe en el inventario.");
    }
};

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

