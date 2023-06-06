// Importar modulo http y exprexx
import http from "http";
import express from "express";

import { engine } from 'express-handlebars';

// Importando http-status
import httpStatus from "http-status";

import path from 'path';

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';
import error_404 from './routes/http_error.routes.js';

// Importando ROOT_DIR
import { ROOT_DIR } from "./helpers/paths.js";

// Crear una instancia de express
const app = express(); // (req, res) => {UN MONTON DE CODIGO}

// Se crea instancia del template engine
const hbsTemplateEngine = engine({

    // Extension de los archivos de plantillas
    extname: '.hbs',
    // Nombre del diseño por defecto
    defaultLayout: 'main',

});

// TE1. Se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2. Se selecciona el Template Engine
app.set('view engine', 'hbs');

// TE3. Se establece la ruta de las vistas
app.set('views', path.resolve('views'));

// Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true }));

// Se registra el middleware para servidor de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador 
// Se agrega un candado para que respete la ruta 'admin'
app.use('/admin', adminRouter);

// Se agrega ruta de shop
app.use(shopRouter);

// Se agrega ruta 404
app.use(error_404);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor
app.listen(port, ip, (err) => {

    console.log("Funcionando en http://localhost:3000");

});

// MIDDLEWARE es un codigo que maneja un req y un res, ejecuta un metodo NEXT y 
// y regresa el req y la res modificados

