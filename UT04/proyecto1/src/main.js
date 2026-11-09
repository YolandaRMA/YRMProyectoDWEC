const BUTTON = document.querySelector("#add"); 
const QUANTITY = document.querySelector("#quantity"); 
const STATUS_PROMPT=document.querySelector(#status);

async function updateQuantity(myMethod){
    const RESPONSE=await fetch("/inventary", {method: myMethod})
}

boton.addEventListener("click", () => { 
    const TOAL = Number(QUANTITY.textContent) + 1; 
    cantidad.textContent = TOTAL; 
});