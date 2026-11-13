/*
Obtén todos los li de #tareas con querySelectorAll(). 
Recorre la colección y muestra sus textos numerados desde 1, 
sin cambiar la página.
*/
const LISTADO_LI_DOM = document.querySelector("#tareas");
const LISTA=LISTADO_LI_DOM.querySelectorAll("li");

let n=0;
LISTA.forEach((li) => {
    n++;
    console.log(n +" " +li.textContent);
});

/*
Cuenta los elementos urgentes mediante otra consulta. Busca después 
los que tengan la clase finalizada y recorre el resultado.
*/

const LISTADO_URGENTE=LISTADO_LI_DOM.querySelectorAll(".urgente");


LISTADO_URGENTE.forEach((li) => {
   
    console.log(li.textContent);
});

/*
Comprobación: hay 4 tareas y 2 urgentes. 
La última consulta devuelve una lista de longitud 0 y 
su recorrido no produce errores.
*/
