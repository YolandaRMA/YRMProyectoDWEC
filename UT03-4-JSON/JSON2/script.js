/*
1. Crea preferencias.json con estos datos y conviértelos a un objeto con JSON.parse().
2. Muestra el primer idioma y recorre favoritos para mostrar cada lugar por consola.
3. Añade "Montaña" a favoritos, cambia el volumen a 40 y desactiva el sonido.
4. Genera el nuevo JSON con JSON.stringify(). Comprueba que las listas y el booleano conservan sus tipos al recuperarlo
*/

// Se declara una función asíncrona para poder utilizar await
async function cargarPreferencias() {

    // try permite ejecutar el código y detectar posibles errores.
    try {

        // fetch() solicita el archivo JSON y await espera su respuesta
        const respuesta = await fetch("./data/preferencias.json");

        // Se comprueba si la petición se ha realizado correctamente
        if (!respuesta.ok) {
            throw new Error("No se ha podido cargar el archivo JSON");
        }

        // Se lee el contenido de la respuesta y se convierte a datos JavaScript
        const preferencias = await respuesta.json();

        // Se muestra el primer idioma de la lista.
        console.log("Primer idioma: " + preferencias.idiomas[0]);

        // forEach() recorre la lista favoritos 
        // lugar es la variable que contiene cada elemento durante el recorrido
        preferencias.favoritos.forEach(function(lugar) {
            console.log("Lugar favorito: " + lugar);
        });

        // Se añade Montaña al final de la lista de favoritos.
        preferencias.favoritos.push("Montaña");

        // Se cambia el volumen a 40
        preferencias.volumen = 40;
        // Se cambia el sonido
        preferencias.sonido = false;

        //muestra los valores 
        console.log("Nuevo volumen: " + preferencias.volumen);
        console.log("Sonido activado: " + preferencias.sonido);
        console.log("Nuevos favoritos: " + preferencias.favoritos);

        // JSON.stringify() convierte el objeto modificado en una cadena 
        const textoModificado = JSON.stringify(preferencias);

        // Se muestra el texto JSON actualizado
        console.log("JSON modificado: " + textoModificado);

        // JSON.parse() vuelve a convertir el texto en un objeto JavaScript
        const comprobacion = JSON.parse(textoModificado);

        //comprueba sonido sigue siendo un booleano
        console.log("Tipo de sonido: " + typeof comprobacion.sonido);

        //  comprueba volumen sigue siendo un número
        console.log("Tipo de volumen: " + typeof comprobacion.volumen);

        // Array.isArray() comprueba que idiomas sigue siendo un array.
        console.log("¿Idiomas es un array?: " + Array.isArray(comprobacion.idiomas));

        // Array.isArray() comprueba que favoritos sigue siendo un array.
        console.log("¿Favoritos es un array?: " + Array.isArray(comprobacion.favoritos));

    // catch recibe el error si falla la carga o el procesamiento.
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

// Se llama a la función para comenzar la carga y el procesamiento.
cargarPreferencias();

/*
await espera dentro de la función asíncrona, pero permite que el resto del programa
 siga funcionando mientras llega la respuesta.
*/