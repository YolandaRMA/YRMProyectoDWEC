/*
1. Crea partida.json y parsea sus datos. 
Recorre jugadores y muestra el nombre, el nivel y la vida de cada uno. 
2. Busca al jugador con id 1. Si tiene pociones y vida menor de 100, consume una y suma 20 de vida, sin superar 100. 
3. Añade a Steve un objeto "escudo" con cantidad 1. Calcula la cantidad total de objetos que lleva cada jugador. 
4. Guarda toda la partida en "practica_partida" de localStorage. Recarga, recupera y verifica vidas, cantidades y configuración.
*/
async function getData(){
  const DATA = await fetch("./data/partidaCompleta.json");
  return DATA_TEXT = await DATA.json();
}


data.productos.forEach(product => {
    if(product.stock > 0){
      console.log(product.nombre + " \t\t|\t" + product.stock)
    }
  });