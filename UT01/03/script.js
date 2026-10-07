/*
let matriz = [
  [1, 2, 3],
  [4, 5, 6]
]

function crearMatriz5x5() {
    const filas = 5;
    const columnas = 5;

    // Inicializavacia
    const matriz = new Array(filas);

    // Llenamos la matriz
    let contador = 1;
    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas); // Creamos cada fila
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = contador++; // Asignamos valores secuenciales
        }
    }

    return matriz;
}

// mostrar la matriz en consola 
function mostrarMatriz(matriz) {
    if (!Array.isArray(matriz) || matriz.length === 0) {
        console.error("La matriz no es válida.");
        return;
    }
    matriz.forEach(fila => {
        console.log(fila.join("\t")); // Tabulación para formato de tabla
    });
}

// Ejecución
const matriz5x5 = crearMatriz5x5();
console.log("Matriz 5x5:");
mostrarMatriz(matriz5x5);
*/

/*
let matriz=new Array(5).fill(0).map(() => new Array(5).fill(0));

function getRandom(min,max){
    return Math.floor(Math.random()*(max - min+1))+min;

for(let i=0; i< matriz.length;i++){
    for (let j=0; j< matriz.length;j++){
       matriz[i][j]=getRandom(1,100) 
    }
}
 for(let i =0;i<matriz.leng;i++){
    console.log("["+ matriz[i].join(' | ')+"]");
 }
*/
//declaracion de array:
let myArray=[];
let myArray2=new Array(numHuecos)