/*
1. Crea personaje.json y convierte su contenido 
con JSON.parse(). Muestra la vida y la zona 
usando sus rutas completas.
2. Resta 20 a la vida, suma 5 a la coordenada x 
y añade "escudo" al inventario.
3. Guarda el personaje modificado en 
localStorage con la clave "practica_personaje" y 
JSON.stringify().
4. Recarga y recupera los datos. Comprueba 
que la clave no es null antes de parsear y 
verifica los tres cambios.
*/
// Se declara una función asíncrona para poder utilizar await.
async function gestionarPersonaje() {
try {
  const respuesta = await fetch("./data/personaje.json");

  // Se comprueba si la petición se ha realizado correctamente
  if (!respuesta.ok) {
    throw new Error("No se ha podido cargar el archivo JSON");
  }

  // Se lee el contenido de la respuesta y se convierte a datos JavaScript
  const personaje = await respuesta.json();

  // Se muestra vida y zona usando rutas completas
  console.log("Vida inicial: " + personaje.estadisticas.vida);
  console.log("zona : " + personaje.posicion.zona);
  console.log("coordenada x inicial: " + personaje.posicion.x);

  // Se resta 20 vida,suma 5x y añade escudo a inventario

  personaje.estadisticas.vida -= 20;
  personaje.posicion.x += 5;
  personaje.inventario.push("escudo");
  //se muestra:
  console.log("nueva vida: " + personaje.estadisticas.vida);
  console.log("nueva posicion x: " + personaje.posicion.x);
  console.log("nuevo inventario: " + personaje.inventario);

  // JSON.stringify() convierte el objeto modificado en una cadena 
  const textoModificado = JSON.stringify(personaje);

  // Se muestra el texto JSON actualizado
  console.log("JSON modificado: " + textoModificado);

//guardar el objeto completo y stringy para convertir a texto para localstore
  localStorage.setItem("practica_personaje", textoModificado);//result de stringify de personaje

/*recupera con getitem que busca dato por su clve,si no devuelve null
const guardado = localStorage.getItem("practica_personaje");*/
//localStorage.removeItem("practica_personaje");

} catch (error) {
  console.error("Error: " + error.message);
}
}gestionarPersonaje();