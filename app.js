// Importar modulo http y exprexx
import http from "http";
import express from "express";
import { nextTick } from "process";

// Crear una instancia de express
const app = express(); // (req, res) => {UN MONTON DE CODIGO}

// Registrando el primer middleware(funcion), next es el ultimo en llamar
app.use((req, res, next) => {

    console.log("Ejecutando middleware 1");
    next();

});

// Segundo middleware
app.use((req, res, next) => {

    console.log(`${req.method} - ${req.url}`);
    next();

});

// Middleware que responde con .send()
app.use((req, res, next) => {

    console.log("Middleware que responde");

    res.send(`
        <h1>Welcome to Express</h1>
        <p>This is my awesome app</p>
    `);

});

// Creando el servidor
const server = http.createServer(app);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor
server.listen(port, ip, (err) => {

    console.log("Funcionando en http://localhost:3000");

});

// MIDDLEWARE es un codigo que maneja un req y un res, ejecuta un metodo NEXT y 
// y regresa el req y la res modificados

