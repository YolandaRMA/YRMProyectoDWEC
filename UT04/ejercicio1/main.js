/*


*/
const TITLE = document.querySelector("h1");
TITLE.textContent="Inventario de Yoli!! ";//muestra este texto en vez de h1 de index(codigo fuente)

const TITULOID = document.getElementById("titulo") ;
const AUTORID = document.getElementById("autor") ;
const RESUMENID = document.getElementById("resumen") ;

console.log("Titulo :"+TITULOID.textContent+ " \n Autor: "+AUTORID.textContent+ "\n Resumen: "+RESUMENID.textContent);
console.log(TITULOID.tagName+":"+TITULOID.textContent+ 
    " \n Autor: "+AUTORID.textContent+ 
    "\n Resumen: "+RESUMENID.textContent);