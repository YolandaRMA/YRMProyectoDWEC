import http from "node:http";
import { readFile , writeFile} from "node:fs/promises";

const INVENTARY_FYLE_RUTE = new URL("./inventary.json" , import.meta.url);
const INVENTARY= JSON.parse(await readFile(INVENTARY_FYLE_RUTE, "utf-8"));

function resJSON(res, data){
  res.setHeader("Content-type", "application/json");
  res.setHeader("Cache-Control", "no-store")
  res.end(JSON.stringify(data));
}


//se guardan los distintos RESOUCES necesarios
const RESOUCES = {
  "/": ["index.html", "text/html"],
  "/style.css": ["style.css", "text/css"],
  "/main.js": ["main.js", "text/javascript"]
};


const SERVER = http.createServer(async (req, res) => {
const RUTE = req.url.split("?")[0];
  if (RUTE=== "/inventary" && req.method === "GET") {
    return resJSON(res, INVENTARY);
  }
  if (RUTE === "/inventary" && req.method === "POST") {
    try {
      
      return resJSON(res, await añadirPiedra());
    } catch {
      res.statusCode = 500;
      return res.end("No se pudo guardar el inventario");
    }
  }
  if (req.method !== "GET" || !Object.hasOwn(RESOUCES, RUTE)) {
    res.statusCode = 404;
    return res.end("Recurso no encontrado");
  }
  const [ARCHIVE, TYPE] = RESOUCES[RUTE];

  try {
    const MY_URL = new URL("./src/" +ARCHIVE, import.meta.url);
    const CONTENT = await readFile(MY_URL);
    res.setHeader("Content-Type", TYPE + "; charset=utf-8");
    res.end(CONTENT);
  } catch {
    res.statusCode = 500;
     res.end("Error al leer el archivo");
  }
});

SERVER.listen(3000, "127.0.0.1", () => {
  console.log("http://127.0.0.1:3000/");
});