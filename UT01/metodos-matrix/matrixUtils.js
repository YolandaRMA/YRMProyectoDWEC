//FUNCIONES PROPIAS DE MATRICES
//Devuelve el primer elemento que encuentre o undefined si no encuentra ningún elemento
const getFirstElement = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if(matrix[i][j] != null && matrix[i][j] != undefined){
                return matrix[i][j];
            }
        }
    }
    return undefined;
}

//Devuelve true si no encuentra ningún elemento
const matrixIsEmpty = (matrix) => {
    return getFirstElement(matrix) === undefined;
}

//Devuelve false cuando el elemento y la matriz son de distintos tipos
const checkTypeOfElement = (matrix, element) => {
    let firstElement = getFirstElement(matrix);

    if(firstElement != undefined){
        return firstElement.constructor === element.constructor;
    }
    else {
        return element === undefined || element === null;
    }
}


export const searchOnMatrixXY = (matrix, element) => {
    let positionXY = [-1, -1];
    if(checkTypeOfElement(matrix, element)){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if(typeof(element) == "object"){
                    if(Object.hasOwn(Object.getPrototypeOf(element), "compareTo")
                        && matrix[i][j].compareTo(element)){
                        
                        positionXY = [i, j];
                    }
                }
                else if(matrix[i][j] === element){
                    positionXY = [i, j];
                }
            }
        }
    }
    return positionXY;
}

const addElement = (matrix, element) => {
    if(typeof(element) == "object"){
        if(Object.hasOwn(Object.getPrototypeOf(element), "add")
            && matrix[i][j].compareTo(element)){
            
            positionXY = [i, j];
        }
    }
    else if(matrix[i][j] === element){
        positionXY = [i, j];
    }
}

export const addElementToMatrixXY = (matrix, element) => {
    if(matrixIsEmpty(matrix) || checkTypeOfElement(matrix, element)){
        let position = searchOnMatrixXY(matrix, undefined);
        if(position[0] != -1){
            addElement(matrix, element);
        }
        else console.log("No se ha podido añadir el elemento: " + element);
    }
    else console.log("No se ha podido añadir el elemento: " + element);
}