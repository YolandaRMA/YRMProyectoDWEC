import { Item } from "./item.js";
import * as MatrixUtils from "./matrixUtils.js";

//Devuelve -1 si no consigue convertir a entero
const tryParseInt = (value) => {
    let num = Number(value);
    return Number.isInteger(num) ? num : -1;
}

//Se crea inventario con posiciones vacías = NULL
let inventary = new Array(9).fill().map(x => new Array(3).fill(null));


const addItem = () => {
    
}