class Player{
    constructor(nombre,nivel,clase){
        this.nombre=nombre;
        this.nivel=nivel;
        this.clase=clase;
    }
}
let perfil= new Player("",1,false)

fetch("./data/characters.json")
  // 1. Convierte la respuesta a un objeto de JS
  .then(response => response.json())

  // 2. Bloque OPCIONAL para validar los datos
  .then(data => {
    if (!data || typeof data.nivel !== 'number') {
      throw new Error("Validación fallida: 'nivel' no existe o no es un número.");
    }
    return data; // Si todo está bien, pasamos los datos al siguiente .then()
  })

  // 3. Bloque para asignar y usar los datos
  .then(data => {
    perfil = data;
    localStorage.setItem("characters",JSON.stringify(perfil));
    
  })

  // Captura tanto errores de red, de conversión a JSON, como de validación
  .catch(error => console.error('Error en el proceso:', error.message));

  

// let jsonData=JSON.stringify(perfil);
// localStorage.setItem("characters",jsonData);

 //let datosJson=localStorage.setItem("characters",JSON.stringify(perfil)); 


//   const perfilText = localStorage.getItem("perfil");
//   console.log(typeof texto);