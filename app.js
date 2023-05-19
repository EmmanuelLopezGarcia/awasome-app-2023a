// Importar modulo http y exprexx
import http from "http";
import express from "express";

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

// Crear una instancia de express
const app = express(); // (req, res) => {UN MONTON DE CODIGO}

// Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use(adminRouter);

// Se agrega ruta de shop
app.use(shopRouter);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor
app.listen(port, ip, (err) => {

    console.log("Funcionando en http://localhost:3000");

});

// MIDDLEWARE es un codigo que maneja un req y un res, ejecuta un metodo NEXT y 
// y regresa el req y la res modificados

