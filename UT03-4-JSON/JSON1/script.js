/* Crea perfil.json con los datos de la derecha. Usa comillas dobles y respeta los tipos de cada valor. 
2. Copia su contenido a una cadena de JavaScript y conviértela con JSON.parse(). Muestra el nombre y el nivel.
3. Comprueba con typeof el tipo de nivel y activo. Aumenta el nivel en 1.
4. Convierte el objeto modificado con JSON.stringify().C ompara el texto obtenido con el JSON inicial*/

/*
// 1. Se copia el contenido de perfil.json a una cadena de texto.
const textoJSON = '{"nombre": "Alex", "nivel": 3, "activo": true}';

// 2. JSON.parse() convierte la cadena JSON en un objeto JavaScript.
let perfil = JSON.parse(textoJSON);

// Se muestra el nombre y el nivel del perfil.
console.log("Nombre: " + perfil.nombre);
console.log("Nivel: " + perfil.nivel);

// 3. typeof comprueba el tipo de dato de cada propiedad.
console.log("Tipo de nivel: " + typeof perfil.nivel);
console.log("Tipo de activo: " + typeof perfil.activo);

// Se aumenta el nivel del perfil en 1.
perfil.nivel = perfil.nivel + 1;

// Se muestra el nivel actualizado.
console.log("Nuevo nivel: " + perfil.nivel);

// 4. JSON.stringify() convierte el objeto modificado en una cadena JSON.
const textoModificado = JSON.stringify(perfil);

// Se muestran las cadenas JSON para compararlas.
console.log("JSON inicial: " + textoJSON);
console.log("JSON modificado: " + textoModificado);

// Se comprueba si las dos cadenas son iguales.
console.log("¿Son iguales?: " + (textoJSON === textoModificado));
*/


// VERSIÓN CON FETCH Y ASINCRONÍA

// fetch() solicita el archivo perfil.json de la carpeta data.
fetch("./data/perfil.json")

    // then() espera la respuesta y la convierte a formato JSON.
    .then(response => response.json())

    // then() recibe el objeto JavaScript obtenido del archivo.
    .then(perfil => { //recibe los datos cuando estn disponibles y ejecuta las operaciones del ejercicio.

        // Se convierte el objeto recibido a una cadena JSON inicial(objeto a texto)
        const textoJSON = JSON.stringify(perfil);

        // Se muestra el nombre y el nivel del perfil.
        console.log("Nombre: " + perfil.nombre);
        console.log("Nivel: " + perfil.nivel);

        // typeof comprueba el tipo de dato de nivel y activo.
        console.log("Tipo de nivel: " + typeof perfil.nivel);
        console.log("Tipo de activo: " + typeof perfil.activo);

        // Se aumenta el nivel del perfil en 1.
        perfil.nivel = perfil.nivel + 1;

        // Se muestra el nivel actualizado.
        console.log("Nuevo nivel: " + perfil.nivel);

        // JSON.stringify() convierte el objeto modificado en texto JSON.
        const textoModificado = JSON.stringify(perfil);

        // Se muestran las dos cadenas para compararlas.
        console.log("JSON inicial: " + textoJSON);
        console.log("JSON modificado: " + textoModificado);

        // Se comprueba si las dos cadenas son iguales.
        console.log("¿Son iguales?: " + (textoJSON === textoModificado));
    })

    // catch() captura errores al solicitar o procesar el archivo.
    .catch(error => console.error("Error al cargar el perfil:", error));

