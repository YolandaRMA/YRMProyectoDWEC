
//JSON 4
function sell(id, data){
  data.productos.forEach(product => {
    if(product.id == id){
      if(product.stock > 0){
        product.stock--;
        console.log("Venta realizada de producto: " + product.nombre);
      }
      else{
        console.log("No hay stock suficiente");
      }
    }
  });
}

function calculateStockValue(data){
  let stockValue = 0;
  data.productos.forEach(product => {
    stockValue += (product.precio * product.stock);
  });
  console.log("Valor de existencias: " + stockValue);
}

function showStock(data){
  console.log("Producto\t|\tStock");
  data.productos.forEach(product => {
    if(product.stock > 0){
      console.log(product.nombre + " \t\t|\t" + product.stock)
    }
  });
}

async function getData(){
  const DATA = await fetch("./Data/tienda.json");
  return DATA_TEXT = await DATA.json();
}

async function main(){
  let data = await getData();
  showStock(data);

  calculateStockValue(data);
  sell(2, data);
  calculateStockValue(data);

  localStorage.setItem("practica_tienda", JSON.stringify(data));

  let newData = JSON.parse(localStorage.getItem("practica_tienda"));

  showStock(newData);
}

main();