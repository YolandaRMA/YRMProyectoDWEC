/*
Selecciona #cultura. Dentro de esa sección, localiza su primer párrafo y 
su enlace destacado.
*/
const DOM_CULTURA = document.querySelector("#cultura");
const PRIMERP=DOM_CULTURA.querySelector("p");
const ENLACEDES=DOM_CULTURA.querySelector(".destacado").href;//href evuelve contenido de este(NO TREXT CONTENT!!)



console.log("Primer parrafo :"+PRIMERP.textContent+ 
    " \n enlade destacado de "+DOM_CULTURA.id+" = "+ENLACEDES);

/*
Busca un elemento que tenga simultáneamente las clases resumen e importante. 
Compara document.querySelector(".destacado") con la misma búsqueda sobre la sección. 
Comprobación: las búsquedas global y local devuelven enlaces distintos. 
Explica por qué .resumen.importante no equivale a .resumen .importante.
*/
const DOM_RESUMEN_IMPORTANTE = document.querySelector(".resumen.importante");


console.log("resumen importante "+ DOM_RESUMEN_IMPORTANTE.textContent);

 console.log(DOM_RESUMEN_IMPORTANTE);
 console.log( DOM_RESUMEN_IMPORTANTE.textContent);