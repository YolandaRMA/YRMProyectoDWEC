

//setTimeout(funcion, tiempo); //ejecuta una función una sola vez.
//setInterval(funcion, tiempo);// ejecuta una función repetidamente.

/*Podemos pasar una función existente a setTimeout()
No debemos escribir saludar() si queremos que se ejecute después: 
IMPORTANTE!!!!!!!!!!!  los paréntesis la ejecutarían inmediatamente.!!!!!!!!!!! 
console.log("Inicio"); setTimeout(() => {
     console.log("Han pasado 2 segundos"); 
    }, 2000); 
     console.log("Fin");*/

/* SetTimeout() devuelve un identificador. 
 Podemos utilizarlo con clearTimeout() para cancelar el temporizador antes de que se ejecute. 

 const temporizador = setTimeout(() => { 
    console.log("Hola");
 }, 5000); 
 clearTimeout(temporizador)    */

 //EJERCICIO:
 /*
 1. Muestra «Preparando partida» y programa «Partida lista» para dentro de 3 segundos. 
 2. Añade «Puedes seguir jugando» justo después de setTimeout(). Antes de ejecutar, predice el orden de los mensajes. 
 3. Crea una función avisar() y pásala a setTimeout para que muestre «Revisa tu inventario» tras 5 segundos. 
 4. Guarda su identificador y cancela este segundo aviso antes de que se ejecute.
 
 */

 console.log("PREPARANDO PARTIDA....");
 function partida() { console.log("PARTIDA LISTA!"); }
 setTimeout(partida, 3000); //SIN PARENTESIS

 console.log("Puedes seguir jugando...")
 function avisar() { console.log("Revisa tu inventario!"); }
 setTimeout(avisar, 5000);
 
 let avisoTask=setTimeout(avisar, 5000);
 clearTimeout(avisoTask);

