// Importar modulo http y exprexx
import http from "http";
import express from "express";

// Crear una instancia de express
const app = express(); // (req, res) => {UN MONTON DE CODIGO}

// Creando el servidor
const server = http.createServer(app);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor
server.listen(port, ip, (err) => {

    console.log("Funcionando en http://localhost:3000");

});