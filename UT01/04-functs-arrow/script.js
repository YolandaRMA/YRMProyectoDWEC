
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

let opcion = prompt("Elija una opción:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir");
//Number() convierte anumero,prompt() devuelve texto.
let numero1 = Number(prompt("Introduzca el primer número:"));
let numero2 = Number(prompt("Introduzca el segundo número:"));
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Debes introducir números válidos.");
} else {
    let resultado;
    switch (opcion) {
        case "1": resultado = sumar(numero1, numero2);
            break;
        case "2": resultado = restar(numero1, numero2);
            break;
        case "3": resultado = multiplicar(numero1, numero2);
            break;
        case "4": resultado = dividir(numero1, numero2);
            break;
        default:
            resultado = "Opción incorrecta";
    }

    alert("Resultado: " + resultado);
}


/*
Una arrow se puede simplificar si solo tiene una línea de código dentro de las llaves. 
Se eliminan las llaves y la palabra
*/
function sumarNumerosNormal(num1, num2) {
     return num1 + num2;
     }

const sumarNumerosArrow = (num1, num2) => {
    return num1 + num2;
}


const sumarNumerosArrowSimplificada = (num1, num2) => num1 + num2;