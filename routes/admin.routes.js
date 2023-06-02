// Importando el enrutador de express
import { Router } from 'express';

import { getAddProduct, postAddProduct } from '../controllers/products.controller.js';

// Creando una instancia del enrutador de express
const router = Router();

// Creando datos en la memoria volatil
export const products = [];

// Formulario agregar producto
// Get /add-product
router.get('/add-product', getAddProduct);

// POST /admin/add-product

router.post('/add-product', postAddProduct);


// Exportando el enrutador admin
export default router;