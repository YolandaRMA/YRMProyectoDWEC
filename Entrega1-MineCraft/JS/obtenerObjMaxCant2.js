function obtenerObjetoMasAbundante() {

    //total de unidades de cada objeto.
    let cantidadesPorObjeto = {};

    for (let fila = 0; fila < inventario.length; fila++) {
        for (let columna = 0; columna < inventario[fila].length; columna++) {
            let item = inventario[fila][columna];
            //ignora huecos vacios
            if (item != null) {

                //minúsculas para agrupar los stacks iguales.
                let nombreClave = item.nombre.toLowerCase();

                // Si es la primera vez que aparece contador a cero.
                if (cantidadesPorObjeto[nombreClave] == undefined) {
                    cantidadesPorObjeto[nombreClave] = {
                        nombre: item.nombre,
                        cantidadTotal: 0
                    };
                }

                // Sumo al total del objeto.
                cantidadesPorObjeto[nombreClave].cantidadTotal += item.cantidad;
            }
        }
    }

    // Si todos los huecos están vacíos, no hay ningún objeto que contar.
    let nombres = Object.keys(cantidadesPorObjeto);
    //Object.keys devuelve un array con los nombres de las propiedades propias enumerables de un objeto.
    //guardamos las cantidades en un objeto, usando el nombre de cada objeto como propiedad.
    //se obtiene una lista con los nombres guardados y poder recorrerlos para averiguar cual tiene +unidades.
    if (nombres.length == 0) {
        console.log("El inventario está vacío.");
        return;
    }

    let cantidadMaxima = 0;

    //cantidad total +alta
    for (let nombre of nombres) {
        if (cantidadesPorObjeto[nombre].cantidadTotal > cantidadMaxima) {
            cantidadMaxima = cantidadesPorObjeto[nombre].cantidadTotal;
        }
    }

    console.log("Objeto más abundante:");

    // Muestra objetos que empatan en la cantidad max.
    for (let nombre of nombres) {
        if (cantidadesPorObjeto[nombre].cantidadTotal == cantidadMaxima) {
            console.log(
                cantidadesPorObjeto[nombre].nombre +
                ": " + cantidadesPorObjeto[nombre].cantidadTotal +
                " unidades"
            );
        }
    }
}