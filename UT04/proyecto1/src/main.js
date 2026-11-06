const boton = document.querySelector("#add"); 
const cantidad = document.querySelector("#quantity"); 

async function updateQuantity(myMethod){
    const RESPONSE=await fetch("/inventary", {method: myMethod})
}

boton.addEventListener("click", () => { 
    const total = Number(cantidad.textContent) + 1; 
    cantidad.textContent = total; 
});