import { Book } from './book.js';
import { library } from './library.js';

/*
----------------------------------------------
    EJERCICIO 1. BIBLIOTECA DE LIBROS
----------------------------------------------
*/

function showMenu() {
    return prompt(`
        Selecciona una opción:
        1. Mostrar todos los libros
        2. Mostrar libros por género
        3. Mostrar precio medio
        4. Mostrar libro más leído
        5. Salir
    `);
}

function showBooks() {
    console.log("TODOS LOS LIBROS:");
    for (let fila = 0; fila < library.length; fila++) {
        if ([fila] == null) {
            console.log(`[${fila}]: VACÍO`);
        } else {
            console.log(library[fila]);
            //no se consigue acceder al metodo creado en la clase para mostrarlo correctasmente
        }
    }
}
// console.log("TODOS LOS LIBROS:");
// for (let libro of library) {
//    libro.console.log(Book.showLibro());
// }

function showBooksByGenre() {
    //Genres es un array que contiene todos los géneros de los libros de la biblioteca sin repetir
    let genres = [...new Set(library.map(book => book.genre))];

    let option = prompt(`
        Selecciona un género:
        1. Ficción
        2. Distópico
        3. Romance
        4. Fantasía
        5. Thriller
        6. Misterio
        7. Clásico
        8. Poesía
        9. Aventura
        10. Épico
        11. Modernista
        12. Drama
        13. Realismo mágico
        14. Ensayo
        15. Suspense
        16. Terror
        17. Histórico
    `);
    /*
    2. IMPLEMENTA LA FUNCIÓN PARA MOSTRAR LOS LIBROS SEGÚN EL GÉNERO SELECCIONADO
    */
}

function showAveragePrice() {
    let acumulador=0;
    let contador=0;
    let media=0;
    for (let i= 0; i < library.length; i++) {
         acumulador = acumulador + library[i].price; 
         contador++;
        }
        media=acumulador/contador;
   console.log("La media de precio de todos los libros es : " + media);
}

function showMostReadBook() {
    // Se toma el primerlibro como el más leido
    let libroMasleido = library[0];

    // compara libros
    for (let libro of library) {
        if (libro.hoursReaded > libroMasleido.hoursReaded) {
            libroMasleido = libro;
        }
    }
    console.log("El libro más leido es: " + libroMasleido.title);
    

}

function showFinishedBooks() {
    /*
    5. IMPLEMENTA LA FUNCIÓN PARA MOSTRAR LOS LIBROS TERMINADOS
    Añade un nuevo atributo a la clase Book llamado "finished" que sea un booleano.
    Modifica el menú y el switch para añadir una nueva opción que permita mostrar los libros terminados.
    En el archivo library.js está un array de libros con el atributo "finished" añadido. Utiliza ese array para mostrar los libros terminados.
    */
   console.log="";
}

let continueLoop = true;
while (continueLoop) {
    let option = showMenu();

    switch (option) {
        case '1':
            showBooks();
            break;
        case '2':
            showBooksByGenre();
            break;
        case '3':
            showAveragePrice();
            break;
        case '4':
            showMostReadBook();
            break;
        case '5':
            continueLoop = false;
            break;
        default:
            alert('Opción no válida');
    }
}