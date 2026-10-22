/*

*/

console.log('Idioma principal: '+navigator.language);
console.log('Idioms preferidos: '+navigator.languages);

/*

*/
if (navigator.onLine) { 
    console.log("Red disponible"); 
} else {
     console.log("Sin conexión"); 
    }

/*

*/
console.log(' estado de las cookies: '+ (navigator.cookieEnabled ? 'estado de las cookies ok':' las cookies están pochas'));


