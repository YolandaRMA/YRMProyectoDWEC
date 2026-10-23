localStorage.setItem("practica_nombre","yoli");
localStorage.setItem("practica_monedas","100");
console.log(typeof(localStorage.getItem("practica_nombre"))+":"+ localStorage.getItem("practica_nombre"));
console.log(typeof(localStorage.getItem("practica_monedas"))+":"+localStorage.getItem("practica_monedas"));

let monedas=Number(localStorage.getItem("practica_monedas"));
monedas+=10;
console.log(typeof(localStorage.getItem("practica_monedas"))+":"+localStorage.getItem("practica_monedas"));



 