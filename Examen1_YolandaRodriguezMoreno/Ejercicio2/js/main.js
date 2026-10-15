
/*
----------------------------------------------
    EJERCICIO 2. RESERVA DE ASIENTOS DE CINE
----------------------------------------------
*/

const SEATS = [
    [null, null, "Ana", null, null],
    [null, "Luis", null, null, null],
    ["Marta", null, null, "Carlos", null],
    [null, null, null, null, "Lucía"],
    [null, "Javier", null, null, null]
];

function showMenu() {
    return prompt(`
        Selecciona una opción:
        1. Mostrar asientos
        2. Mostrar reservas
        3. Mostrar asientos libres
        4. Reservar asiento
        5. Liberar asiento
        6. Salir
    `);
}

function showSeats() {
    for (let fila = 0; fila < SEATS.length; fila++) {
        for (let columna = 0; columna < SEATS[fila].length; columna++) {     
            if(SEATS[fila][columna]==null){
                SEATS[fila][columna]=" [] "
            }            
         console.log(SEATS[fila][columna]);   
        }
    }
}

function showReservations() {
    /*
    2. IMPLEMENTA LA FUNCIÓN PARA MOSTRAR LAS RESERVAS DEL CINE
    Butaca 1,2: Ana
    Butaca 2,2: Luis
    Butaca 3,1: Marta
    Butaca 3,4: Carlos
    Butaca 4,5: Lucía
    Butaca 5,2: Javier
    */
   
    for (let fila = 0; fila < SEATS.length; fila++) {
        for (let columna = 0; columna < SEATS[fila].length; columna++) {     
            if(SEATS[fila][columna]!==null){
             console.log(`fila [fila]+ columna +[columna]+ ${SEATS[fila][columna]}`);     
            }            
         
        }
    }
}



function showFreeSeats() {
    /*
    3. IMPLEMENTA LA FUNCIÓN PARA MOSTRAR LOS ASIENTOS LIBRES DEL CINE
    Butaca 1,1 | Butaca 1,2 | Butaca 1,4 | Butaca 1,5 |
    Butaca 2,1 | Butaca 2,3 | Butaca 2,4 | Butaca 2,5 |
    Butaca 3,2 | Butaca 3,3 | Butaca 3,5 |
    */

}

function reserveSeat() {
//    let fila = prompt("Introduce la fila del asiento a reservar :");
//     if (fila !== null || fila.trim() == "") {
//         alert("Operación cancelada.");
//         return;
//     }
//     let columna = prompt("Introduce la columna del del asiento a reservar:");
//     if (columna !== null || columna.trim() == "") {
//         alert("Operación cancelada.");
//         return;
//     }

    
}


function freeSeat() {
     let fila = prompt("Introduce la fila del asiento a eliminar :");
    if (fila == null || fila.trim() == "") {
        alert("Operación cancelada.");
        return;
    }
    let columna = prompt("Introduce la columna del del asiento a eliminar:");
    if (columna == null || columna.trim() == "") {
        alert("Operación cancelada.");
        return;
    }
    fila = Number(fila);
    columna = Number(columna);
    if (!Number.isInteger(fila) || !Number.isInteger(columna)) {
        alert("Las filas y columnas deben ser números enteros.");
        return;
    }
    if (
        fila < 0 || fila >= SEATS.length ||
        columna < 0 || columna >= SEATS[0].length
    ) {
        alert("La posición indicada no existe.");
        return;
    }
    let asiento = SEATS[fila][columna];
    // No eliminar de  hueco vacío.
    if (asiento == null) {
        alert("El hueco seleccionado está vacío.");
        return;
    }
    //confirmación antes de eliminar el objeto.
    if (confirm("¿Quieres eliminar " +asiento + "?")) {
        SEATS[fila][columna] = null;
        alert("leliminado correctamente.");
    } else {
        alert("No se ha eliminado el objeto.");
    }
}



let continueLoop = true;
while (continueLoop) {
    let option = showMenu();
    switch (option) {
        case "1":
            showSeats();
            break;
        case "2":
            showReservations();
            break;
        case "3":
            showFreeSeats();
            break;
        case "4":
            reserveSeat();
            break;
        case "5":
            freeSeat();
            break;
        case "6":
            continueLoop = false;
            break;
        default:
            alert("Opción no válida");
    }
}