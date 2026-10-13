/*let datos=[];

let nombre = prompt("Introduxca su nombre");
let apellido = prompt("Introduzca apelliudo:");
let edad = prompt("Introduzca su edad:");
datos[0]=nombre;
datos[1]=apellido;
datos[2]=edad;

console.log(datos);

const mostrarDatos=(nombre,apellido,edad)=>{
    // console.log("Nombre: " + nombre + ", Apellido: " + apellido + ", Edad: " + edad);
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
}

for (let index = 0; index < datos.length; index++) {
    mostrarDatos(datos[index], index);
    
}

let datos = [];

datos[0] = prompt("Introduzca su nombre:");
datos[1] = prompt("Introduzca su apellido:");
datos[2] = prompt("Introduzca su edad:");

const mostrarDatosForEach = (datos) => {
    return "Nombre: " + datos[0] +
           ", Apellido: " + datos[1] +
           ", Edad: " + datos[2];
};

for (let dato of datos) {
    mostrarDatosForEach(dato);
}
//simplificado: console.log(mostrarDatosForEach(datos));
*/

let datos2 = [];

let nombre = prompt("Introduzca su nombre:");
let apellido = prompt("Introduzca su apellido:");
let edad = prompt("Introduzca su edad:");

datos2[0] = nombre;
datos2[1] = apellido;
datos2[2] = edad;

let nombresVariables = ["nombre", "apellido", "edad"];

const mostrarDatos = (datos2) => {
    let resultado = "";

    for (let index = 0; index < datos2.length; index++) {
        resultado = resultado + nombresVariables[index] + ": " + datos2[index] + "\n";//posicioners de los 2 arrays coinciden
    }

    return resultado;
};

console.log(mostrarDatos(datos2));

//pedir 10 numero a usuario,guardar en array y recorrer para mostrars suma
let numeros = [];
let suma = 0;


for (let index = 0; index < 10; index++) {
    let numero = Number(prompt("Introduzca un número:"));
    numeros[index] = numero;
}

// Mostramos todos los números
console.log("Números introducidos: " + numeros);

// Suma todos los elementos del array
for (let index = 0; index < numeros.length; index++) {
    suma = suma + numeros[index];
}

// Mostramos la suma total
console.log("La suma total es: " + suma);