/*
1. Abre una página mediante un servidor local y muestra su URL completa en consola. 
2. Muestra por separado protocol, hostname, port y pathname. Identifica cada parte en la barra de direcciones. 
3. Recarga la página con location.reload(), ejecutándolo una sola vez desde la consola. 
4. Por separado, navega a https://example.com asignando la dirección a location.href.

*/
 


console.log("URL: "+location.href);

console.log(location.protocol);

console.log(location.hostname); 

console.log(location.port); 

console.log(location.pathname);

//REFRESCA
//location.reload();

//redirecciona
//location.href = "https://elpais.es";