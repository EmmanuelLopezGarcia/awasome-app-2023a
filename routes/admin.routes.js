// Importando el enrutador de express
import { Router } from 'express';

import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// Formulario agregar producto
// Get /add-product
router.get('/add-product', (req, res, next) => {

    // Si la peticion es post pasamos el siguiente Middleware

    if(req.method === "POST") return next();

    // Servimos el formulario

    console.log("Sirviendo formulario...");

    //res.send(`

      //  <form action = "/add-product" method = "POST">
      //      <input type = "text" name = "title">
      //      <button type = "submit">Add product</button>
      //  </form>
    
    //`);

    res.sendFile(path.resolve('views', 'add-product.html'));
    

});

// POST /add-product
router.post('/add-product', (req, res) => {

    // REalizaremos la extraccion de parametros
    // dentro de la peticion

    console.log(req.body);

    res.redirect('/');

});

// Exportando el enrutador admin
export default router;