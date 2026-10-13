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
//let myVector=new Array(3)
// let myArray=[];
// let myArray2=new Array(numHuecos);

// //metodos comunes(con array sin memoria fija).
// myArray = []

// // push y pop

// myArray.push("Brais")//añade al sinal
// myArray.push("Moure")
// myArray.push("mouredev")
// myArray.push(37)

// console.log(myArray)

// console.log(myArray.pop()) // Elimina el último y lo devuelve
// myArray.pop()

// console.log(myArray)

// // shift y unshift

// console.log(myArray.shift())//elimina el primer elemento del array y lo devuelve
// console.log(myArray)

// myArray.unshift("Brais", "mouredev")//agrega uno o mas elementos al principio del array
// console.log(myArray)

// // length

// console.log(myArray.length)

// // clear

// myArray = []//al volver a inicializar vfacio-se borra
// myArray.length = 0 // alternativa "peor",NO UTILIZAR!
// console.log(myArray)

// // slice

// myArray = ["Brais", "Moure", "mouredev", 37, true]

// let myNewArray = myArray.slice(1, 3)//devuelve copia de los elementos pasados por param,el ultimo no incluido

// console.log(myArray)
// console.log(myNewArray)

// // splice

// myArray.splice(1, 3)//elimina los elementos pasados param(desde elemento que empieza,nº de elementos a borrar)
// console.log(myArray)

// myArray = ["Brais", "Moure", "mouredev", 37, true]

// myArray.splice(1, 2, "Nueva entrada")//1º argumentp posicion,2º numero de elementos a borrar,3ºarg añade
// console.log(myArray)


let paises=["españa","francia","portugal"];
for (let index = 0; index < paises.length; index++) {
    console.log(paises[index])
    //devuelve cada pais por separado,no la matriz compñeta como console.log(paises)
}

let paises2=["españa","francia","portugal"];
for (let index = 0; index < paises2.length; index++) {
    console.log(paises2[index])
    //devuelve cada pais por separado,no la matriz compñeta como console.log(paises)
    if(paises[index]=="españa"){
        console.log("mi pais de nacimiento")
    }
}
//-------------------------------------------------------------------------------------------------------------------------------

//----------------------MATRICES-------------------------------------------------------------------------------------------------

//para JS matriz=conjunto de vectores,cada fila=1 vector
//let matrix=[[1,2,3],[4,5,6],[7,8,9]];
//console.log(matrix);
let matrix2=new Array(3);
//matriz vacía de 3x3
for (let index = 0; index < matrix2.length; index++) {
    matrix2[index]=new Array(3);   
}
console.log(matrix2);

for (let fila = 0; fila < matrix2.length; fila++) {
    for (let colum = 0; colum < fila.length; colum++) {
      console.log(matrix2[fila][colum])  ;
    }
    
}
