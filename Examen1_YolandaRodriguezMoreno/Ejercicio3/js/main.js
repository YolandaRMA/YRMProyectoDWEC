
/*
------------------------------------------------------------
    EJERCICIO 3: DEPURACIÓN DE CÓDIGO
    Corrige los 10 errores que hay en el siguiente código.
------------------------------------------------------------
*/

const nombre = "Alex";
let edad = "20";
//const mayorEdad = false;

if (edad >= 18) {
    //mayorEdad = true;//mayorEdad es constante no puede cambiar de valor
}

console.log("Usuario: " + nombre.toUppercase());//mal escrito

let numeros = [10, 20, 30, 40];

for (let i = 0; i <= numeros.length; i++) {//el bucle se pasa una posicion NO MENOR O =, MENOR
    console.log(numeros[i]);
}

function calcularMedia(lista) {//array se llama numeros
    let suma = 0;

    lista.forEach(numero => {//numeros
        suma = numero;//suma= suma+ mumero
    });

    return suma / lista.length;
}

console.log("Media: " + calcularMedia(numeros).toFixed(2));//media es = a lo que deberia retornar la funcion de calcularla

let precio = "19.99";

if (precio === 19.99) {// solo un =
    console.log("Precio correcto");
}

const aleatorio = Math.floor(Math.random * 10) + 1;//nMATH RANDOM MAL ESCRITO

console.log("Número aleatorio: " + aleatorio);