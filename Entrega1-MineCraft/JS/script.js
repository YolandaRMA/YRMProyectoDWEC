class Item {
    constructor(nombre, descripcion, cantidad, maxStack) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this._cantidad = cantidad;//para que pase por el setter y se controle que no sea negativa ni supere maxStack
        this.maxStack = maxStack;
    }
    /*
    constructor(nombre, descripcion, cantidad, maxStack) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.maxStack = maxStack; // Primero guardo el máximo permitido.
    this.cantidad = cantidad; // Así pasa por el setter y se valida.
}
    */
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
    /*
    plantillas (template literals)
    " "  texto normal, NO interpreta ${}
    ' '  texto normal, NO interpreta ${}
    ` `  permite usar ${variable}
    */
    mostrarInformacion() {
        return `${this.nombre} - ${this.descripcion} - Cantidad: ${this.cantidad}/${this.maxStack}`;
    }
    /*
    mostrarInformacion() {
    return this.nombre + " - " + this.descripcion +
           " - Cantidad: " + this.cantidad + "/" + this.maxStack;
    }
    */
}

// let inventario =new Array(9).fill().map(x=> new)
//map recorre un array y crea otro con el resultado de aplicar una operación a cada elemento
// let inventario2 = [
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null]
// ];



//array(4) crea un array de 4 posiciones,map recorre las posiciones y crea algo nuevo para cada una de las 4 posiciones, crea un array de 9 null.
let inventario = Array(4).fill(null).map(() => Array(9).fill(null));
//fill rellena las posiciones de un array con el valor indicado.



inventario[0][0] = new Item("Piedra", "Arma de piedra", 32, 64);
inventario[0][1] = new Item("Antorcha", "Utensilio para alumbrar", 20, 64);
inventario[1][3] = new Item("Manzana", "Alimento", 10, 64);
inventario[2][4] = new Item("Espada de diamante", "Arma", 1, 1);
inventario[3][2] = new Item("Pico de hierro", "Herramienta", 1, 1);

//funciones usabilidad

/*
devuelve todas las posiciones donde aparece ese objeto,
guardando fila, columna y e item.
*/
function buscarItemPorNombre(nombreBuscado) {
    let posicionesEncontradas = [];

    //minúsculas para comparar 
    nombreBuscado = nombreBuscado.trim().toLowerCase();

    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {

            let item = inventario[fila][columna];

            // Comprueba hueco no este vacio ycoincida el nombre.
            if (item != null && item.nombre.toLowerCase() == nombreBuscado) {
                posicionesEncontradas.push({ 
            //push añade un elemento al final de un array
                    fila: fila,
                    columna: columna,
                    item: item
                });
            }
        }
    }

    return posicionesEncontradas;
}


//calcula cuántas unidades caben enstack y resta cantidad actual al máximo permitido.
function cantidadHastaElMaximo(item) {
    return item.maxStack - item.cantidad;
}


/*
 Busca hueco vacío y guarda parte de las unidades que todavía quedan por añadir.
devuelve las unidades que no ha podido guardar.
*/
function añadirCantidadAHuecoVacio(item, cantidadPendiente) {
    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {
            //crear stack nuevo si hueco vacio
            if (inventario[fila][columna] == null) {
                // No guarda más unidades de las que permite el stack.
                let cantidadAIntroducir = Math.min(
                    cantidadPendiente,
                    item.maxStack
                );
                //Crea un nuevo Item con los datos del objeto añadiendo.
                inventario[fila][columna] = new Item(
                    item.nombre,
                    item.descripcion,
                    cantidadAIntroducir,
                    item.maxStack
                );

                // Resta las unidades
                cantidadPendiente -= cantidadAIntroducir;

                // Si se ha guardado todo, no seguir buscando.
                if (cantidadPendiente == 0) {
                    return 0;
                }
            }
        }
    }

    // Si no quedan huecos, devuelve unidades sobrantes
    return cantidadPendiente;
}

//funciones switch

function mostrarInventario() {
    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {

            if (inventario[fila][columna] == null) {
                console.log(`Posición [${fila}][${columna}]: VACÍO`);
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
    inventario[0].forEach((item, columna) => {
//foreach recorre todos los elementos de un array y ejecuta una operación con cada uno
        if (item == null) {
            console.log(`Posición [0][${columna}]: VACÍO`);
        } else {
            console.log(`Posición [0][${columna}]: ${item.mostrarInformacion()}`);
        }

    });
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

/*
Primero se comprueba si ya existe .
Después rellena stacks incompletos y si hace falta
utiliza huecos vacíos.
 */
function anadirObjeto() {
    let nombre = prompt("Introduce el nombre del objeto:");
    // Comprueba que el usuario haya escrito un nombre.
    if (nombre == null || nombre.trim() == "") {
        alert("Debes introducir un nombre.");
        return;
    }
    nombre = nombre.trim();
    // Busco si hay stacks de ese objeto.
    let posiciones = buscarItemPorNombre(nombre);
    let descripcion;
    let maxStack;
    // Si ya existe utilizo los datos del primer stack encontrado.
    if (posiciones.length > 0) {
        descripcion = posiciones[0].item.descripcion;
        maxStack = posiciones[0].item.maxStack;
        nombre = posiciones[0].item.nombre;

    } else {
        // Si es un objeto nuevo necesito sus datos.
        descripcion = prompt("Introduce la descripción del objeto:");
        if (descripcion == null || descripcion.trim() == "") {
            alert("Debes introducir una descripción.");
            return;
        }
        descripcion = descripcion.trim();
        maxStack = Number(prompt("Introduce el máximo de unidades por stack:"));//Number intenta convertir un valor a numero

        // El máximo mayor que cero.
        if (!Number.isInteger(maxStack) || maxStack <= 0) {
            alert("El máximo debe ser un número entero mayor que cero.");
            return;
        }
        // Muestra el nombre con la primera letra en mayúscula.
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
        //char devuelve el carácter que se encuentra en una posicion concret
        //slice devuelve el texto desde la posición 1 hasta el final.
    }
    //unidades a añadir.
    let cantidad = Number(prompt("¿Cuántas unidades quieres añadir?"));
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        alert("La cantidad debe ser mayor que cero.");
        return;
    }

    // Crea un objeto temporal con los datos que voy a utilizar.
    let nuevoItem = new Item(nombre, descripcion, 1, maxStack);

    // Guarda las unidades que todavía me quedan por colocar.
    let cantidadPendiente = cantidad;

    // Primero aprovecho los stacks del mismo objeto que no están completos.
    for (let i = 0; i < posiciones.length && cantidadPendiente > 0; i++) {
        let itemActual = posiciones[i].item;
        //espacio en este stack.
        let espacioDisponible = cantidadHastaElMaximo(itemActual);
        // Solo añade unidades si queda espacio.
        if (espacioDisponible > 0) {
            // No añado mas unidades de las que caben.
            let cantidadAAnadir = Math.min(//Devuelve el menor de los números que le pasamos.
                /*
                Object.keys() trabaja con las propiedades de los objetos(para obtener un array con sus claves)
                 y Math.min() realiza una operación matemática.
                */
                cantidadPendiente,
                espacioDisponible
            );
            itemActual.cantidad = itemActual.cantidad + cantidadAAnadir;

            // Actualizar unidades pendientes.
            cantidadPendiente -= cantidadAAnadir;
        }
    }

    // Si todavía quedan unidades se intentan guardar en huecos libres
    if (cantidadPendiente > 0) {
        cantidadPendiente = añadirCantidadAHuecoVacio(
            nuevoItem,
            cantidadPendiente
        );
    }


    if (cantidadPendiente == 0) {
        alert("Objeto añadido correctamente.");
    } else {
        let cantidadAnadida = cantidad - cantidadPendiente;

        alert(
            "No hay espacio suficiente.\n" +
            "cantidad añadida: " + cantidadAnadida + "\n" +
            "unidades que no caben: " + cantidadPendiente
        );
    }
}
//se aconseja añadir cantidadHastaElMaximo y añadirCantidadAHuecoVacio
//buscarItemPorNombre (no solo buscar de case)
//buscar en x e y para uso despues
//cuando usuario añada item pasar todo a minus-mayus aunque muestre luego 1a mayuscula

/*
 Mueve un objeto de una posición a otra.
 Si destino vacío, objeto completo.
Si hay otro stack del mismo objeto, intento combinar las cantidades sin superar el máximo permitido.
 */
function moverObjeto() {

    let filaOrigen = prompt("Introduce la fila de origen (0-3):");
    if (filaOrigen == null || filaOrigen.trim() == "") {//trimp para eliminar espacios en blancoal principio y final
        alert("Operación cancelada.");
        return;
    }
    let columnaOrigen = prompt("Introduce la columna de origen (0-8):");
    if (columnaOrigen == null || columnaOrigen.trim() == "") {
        alert("Operación cancelada.");
        return;
    }
    let filaDestino = prompt("Introduce la fila de destino (0-3):");

    if (filaDestino == null || filaDestino.trim() == "") {
        alert("Operación cancelada.");
        return;
    }

    let columnaDestino = prompt("Introduce la columna de destino (0-8):");

    if (columnaDestino == null || columnaDestino.trim() == "") {
        alert("Operación cancelada.");
        return;
    }

    // Convierto las coordenadas a números.
    filaOrigen = Number(filaOrigen);
    columnaOrigen = Number(columnaOrigen);
    filaDestino = Number(filaDestino);
    columnaDestino = Number(columnaDestino);

    // Compruebo que todas las coordenadas sean enteros.
    if (
        !Number.isInteger(filaOrigen) ||
        !Number.isInteger(columnaOrigen) ||
        !Number.isInteger(filaDestino) ||
        !Number.isInteger(columnaDestino)
    ) {
        alert("Las filas y columnas deben ser números enteros.");
        return;
    }

    //que posiciones existan en la matriz.
    if (
        filaOrigen < 0 || filaOrigen >= inventario.length ||
        filaDestino < 0 || filaDestino >= inventario.length ||
        columnaOrigen < 0 || columnaOrigen >= inventario[0].length ||
        columnaDestino < 0 || columnaDestino >= inventario[0].length
    ) {
        alert("La posición indicada no existe.");
        return;
    }

    // No a  misma posición.
    if (filaOrigen == filaDestino && columnaOrigen == columnaDestino) {
        alert("El origen y el destino son la misma posición.");
        return;
    }
    let itemOrigen = inventario[filaOrigen][columnaOrigen];
    let itemDestino = inventario[filaDestino][columnaDestino];

    // No puede mover objeto desde hueco vacío.
    if (itemOrigen == null) {
        alert("La posición de origen está vacía.");
        return;
    }

    // Si el destino está vacío muevoobjeto completo.
    if (itemDestino == null) {
        inventario[filaDestino][columnaDestino] = itemOrigen;
        inventario[filaOrigen][columnaOrigen] = null;

        alert("Objeto movido correctamente.");
        return;
    }

    // Compruebo que los dos stacks sean del mismo tipo de objeto.
    if (
        itemOrigen.nombre.toLowerCase() == itemDestino.nombre.toLowerCase() &&
        itemOrigen.maxStack == itemDestino.maxStack
    ) {

        let espacioDisponible = cantidadHastaElMaximo(itemDestino);

        // Si el destino está completo, no puedo añadir más 
        if (espacioDisponible == 0) {
            alert("El stack de destino está completo.");
            return;
        }

        // Muevo solo las unidades que caben
        let cantidadAMover = Math.min(
            itemOrigen.cantidad,
            espacioDisponible
        );

        itemDestino.cantidad = itemDestino.cantidad + cantidadAMover;
        itemOrigen.cantidad = itemOrigen.cantidad - cantidadAMover;

        // Si el stack de origen se queda vacío ese hueco.
        if (itemOrigen.cantidad == 0) {
            inventario[filaOrigen][columnaOrigen] = null;
        }

        alert("Se han combinado las cantidades correctamente.");

    } else {
        // No objetos diferentes.
        alert("No puedes combinar objetos de distinto tipo.");
    }
}


function eliminarObjeto() {
    let fila = prompt("Introduce la fila del objeto que quieres eliminar (0-3):");
    if (fila == null || fila.trim() == "") {
        alert("Operación cancelada.");
        return;
    }
    let columna = prompt("Introduce la columna del objeto que quieres eliminar (0-8):");
    if (columna == null || columna.trim() == "") {
        alert("Operación cancelada.");
        return;
    }
    fila = Number(fila);
    columna = Number(columna);
    // Compruebo que las coordenadas sean números enteros.
    if (!Number.isInteger(fila) || !Number.isInteger(columna)) {
        alert("Las filas y columnas deben ser números enteros.");
        return;
    }
    // Compruebo que la posición esté dentro del inventario.
    if (
        fila < 0 || fila >= inventario.length ||
        columna < 0 || columna >= inventario[0].length
    ) {
        alert("La posición indicada no existe.");
        return;
    }
    let item = inventario[fila][columna];
    // No eliminar de  hueco vacío.
    if (item == null) {
        alert("El hueco seleccionado está vacío.");
        return;
    }
    //confirmación antes de eliminar el objeto.
    if (confirm("¿Quieres eliminar " + item.nombre + "?")) {
        inventario[fila][columna] = null;
        alert("Objeto eliminado correctamente.");
    } else {
        alert("No se ha eliminado el objeto.");
    }
}


/*
 Cuenta los huecos vacíos de todo el inventario y de la barra rápida.
 La barra rápida es la primera fila inventario[0].
 */
function contarHuecosLibres() {
    let huecosLibres = 0;
    let huecosLibresBarra = 0;
    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {
            // Cada posición que contiene null está libre.
            if (inventario[fila][columna] == null) {
                huecosLibres++;
                // Si la fila es la primera, pertenece a la barra rápida.
                if (fila == 0) {
                    huecosLibresBarra++;
                }
            }
        }
    }
    console.log("Huecos libres en todo el inventario: " + huecosLibres);
    console.log("Huecos libres en la barra rápida: " + huecosLibresBarra);
}



//suma las cantidades de todos los stacks de cada objeto aunque esté repartido en varios huecos
//contar las unidades, encontrar la cantidad mayor y mostrar el resultado

function obtenerObjetoMasAbundante() {
    //  Map para guardar el nombre del objeto y su cantidad
    let cantidades = new Map();
    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {
            // Guarda obj que hay en esta posicion
            let item = inventario[fila][columna];

            // cuenta posiciones que no están vacias.
            if (item != null) {
                //nombre a minúsculas para agrupar objetos iguales.
                let nombre = item.nombre.toLowerCase();
                // Si el objeto ya en Map suma su cantidad.
                if (cantidades.has(nombre)) {//has comprueba si obj ya guardado
                    cantidades.set(nombre, cantidades.get(nombre) + item.cantidad);
                } else {
                    // Si no existe lo guarda con su cantidad 
                    cantidades.set(nombre, item.cantidad);
                }
            }
        }
    }
    // Si Map vacío no contar.
    if (cantidades.size == 0) {
        console.log("El inventario está vacío.");
        return;
    }

    // inicializa a cero.
    let maxima = 0;

    // Recorre cantidades para encontrar la más alta.
    for (let cantidad of cantidades.values()) {
        if (cantidad > maxima) {
            maxima = cantidad;
        }
    }

    // Muestro los objetos que tienen la cantidad máxima.
    for (let [nombre, cantidad] of cantidades) { //corchetes permiten hacer separación directamente
        /*
        for (let pareja of cantidades) {
        let nombre = pareja[0];
        let cantidad = pareja[1];
        */
        if (cantidad == maxima) {
            console.log("el/los objetos mas abundantes son: "+nombre + ": " + cantidad + " unidades");
        }
    }
}

//----------------------------------------------------------------------------------------

// switch para opciones de la aplicacion
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

