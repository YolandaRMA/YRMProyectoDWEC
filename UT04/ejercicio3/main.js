/*
Obtén todos los li de #tareas con querySelectorAll(). 
Recorre la colección y muestra sus textos numerados desde 1, 
sin cambiar la página.
*/
const LISTADO_LI_DOM = document.querySelectorAll("#tareas");
LISTADO_LI_DOM.forEach(li) => {
    console.log("li.tex");
});

/*
Cuenta los elementos urgentes mediante otra consulta. Busca después 
los que tengan la clase finalizada y recorre el resultado.
*/

console.log("Primer parrafo :"+PRIMERP.textContent+ 
    " \n enlade destacado de "+DOM_CULTURA.id+" = "+ENLACEDES);

    /*
    Comprobación: hay 4 tareas y 2 urgentes. 
    La última consulta devuelve una lista de longitud 0 y su recorrido no produce errores.
    */
