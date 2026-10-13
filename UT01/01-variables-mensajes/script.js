//variables
let nombre1="Pepe";
let edad=undefined;
let aprobado=true;
let nota=5.5;//números enteros como los decimales son de tipo number.
let clase=null;//En JavaScript typeof null devuelve object.
console.log();

console.log("La variable nombre1 tiene el valor " + nombre1 + " y es de tipo " + typeof nombre1);
console.log("La variable edad tiene el valor " + edad + " y es de tipo " + typeof edad);
console.log("La variable aprobado tiene el valor " + aprobado + " y es de tipo " + typeof aprobado);
console.log("La variable nota tiene el valor " + nota + " y es de tipo " + typeof nota);
console.log("La variable clase tiene el valor " + clase + " y es de tipo " + typeof clase);


const str1 = "Hola";
const str2 = "Mundo";
const resulta = str1.concat(" ", str2);
console.log(resulta); // "Hola Mundo"

//Template Literals muestra valor `${saludo} ${nombre}`;
//tipos de mensajes
let respuesta = confirm("¿Quieres continuar?");
//devuelve true si Aceptar y false si  Cancelar.
console.log(respuesta);


let nombre = prompt("¿Cómo te llamas?");
//devuelve el texto que escribe el usuario.
console.log(nombre);


let mensaje = alert("Hola, bienvenido");
//muestra un mensaje, no devuelve valor útil.
console.log(mensaje);


let resultado = console.log("Hola desde la consola");
// console.log muestra el mensaje en la consola,no devuelvevalor.
console.log(resultado);