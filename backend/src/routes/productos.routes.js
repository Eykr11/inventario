import { Router } from "express";
import { methodHTTP as productoController } from "../controllers/productos.controllers.js";

const router = Router();

// PUT /api/productos/:id - Actualizar un producto
router.put("/:id", productoController.updateProductos);
router.get("/", productoController.getProductos);

export default router;