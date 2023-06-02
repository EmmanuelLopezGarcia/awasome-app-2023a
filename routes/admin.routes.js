// Importando el enrutador de express
import { Router } from 'express';

import path from 'path';

// Importando ROOT DIR
import { ROOT_DIR } from '../helpers/paths.js';

// Creando una instancia del enrutador de express
const router = Router();

// Creando datos en la memoria volatil
export const products = [];

// Formulario agregar producto
// Get /add-product
router.get('/add-product', (req, res, next) => {

    // Si la peticion es post pasamos el siguiente Middleware

    if(req.method === "POST") return next();

    // Servimos el formulario

    console.log("Sirviendo formulario...");

    console.log(`ROOT_DIR:${ROOT_DIR}`);

    //res.sendFile(path.resolve(ROOT_DIR, 'views', 'add-product.html'));
    
    res.render('add-product', {
        addProduct: 'active', 
        viewStyle: '/css/product.css',
        docTitle: "Add Product"
        });

});

// POST /add-product
router.post('/add-product', (req, res) => {

    // REalizaremos la extraccion de parametros
    // dentro de la peticion

    const { title } = req.body;

    products.push(title);

    res.redirect('/');

});

// Exportando el enrutador admin
export default router;