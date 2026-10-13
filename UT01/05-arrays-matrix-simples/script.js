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
    
}*/

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


let datos = [];

let nombre = prompt("Introduzca su nombre:");
let apellido = prompt("Introduzca su apellido:");
let edad = prompt("Introduzca su edad:");

datos[0] = nombre;
datos[1] = apellido;
datos[2] = edad;

let nombresVariables = ["nombre", "apellido", "edad"];

const mostrarDatos = (datos) => {
    let resultado = "";

    for (let index = 0; index < datos.length; index++) {
        resultado = resultado + nombresVariables[index] + ": " + datos[index] + "\n";//posicioners de los 2 arrays coinciden
    }

    return resultado;
};

console.log(mostrarDatos(datos));