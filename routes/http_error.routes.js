// Importando el enrutador de express
import { Router } from 'express';

// Importando Action funcion del controlador products
import { http_error } from '../controllers/httpErrors.controller.js';

// Creando una instancia del enrutador de express
const router = Router();

// GET /
router.use(http_error);

export default router;
