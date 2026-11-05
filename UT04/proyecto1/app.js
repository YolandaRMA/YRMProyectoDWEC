import http from "node:http";
import { readFile }fs from "node:fs/promises";

//se guardan los distintos recursos necesarios
const recursos = {
  "/": ["index.html", "text/html"],
  "/style.css": ["style.css", "text/css"],
  "/main.js": ["main.js", "text/javascript"]
};


const SERVER = http.createServer(async (req, res) => {
  console.log(req.method, req.url);
  const RUTE = req.url.split("?")[0];
  if (RUTE=== "/inventario" && req.method === "GET") {
    return responderJSON(res, inventario);
  }
  if (ruta === "/inventario" && req.method === "POST") {
    try {
      return responderJSON(res, await añadirPiedra());
    } catch {
      res.statusCode = 500;
      return res.end("No se pudo guardar el inventario");
    }
  }
  if (req.method !== "GET" || !Object.hasOwn(recursos, ruta)) {
    res.statusCode = 404;
    return res.end("Recurso no encontrado");
  }
  const [archivo, tipo] = recursos[ruta];

  try {
    const url = new URL("./src/" + archivo, import.meta.url);
    const contenido = await readFile(url);
    res.setHeader("Content-Type", tipo + "; charset=utf-8");
    res.end(contenido);
  } catch {
    res.statusCode = 500;
     res.end("Error al leer el archivo");
  }
});

servidor.listen(3000, "127.0.0.1", () => {
  console.log("Servidor en http://127.0.0.1:3000/");
});