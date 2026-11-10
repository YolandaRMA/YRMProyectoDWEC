/*
Selecciona título, autor y resumen con getElementById(). 
Muestra en consola cada elemento, su tagName y su 
textContent.
Busca después el id «fecha», que no existe. Controla el 
resultado antes de consultar sus propiedades y muestra un 
mensaje si falta.
Comprobación: obtienes H1, P y P. La búsqueda de fecha 
devuelve null sin interrumpir el programa.

*/
const TITLE = document.querySelector("h1");
TITLE.textContent="Inventario de Yoli!! ";//muestra este texto en vez de h1 de index(codigo fuente)

const TITULOID = getElementById("titulo") ;
console.log(TITULOID.textContent);