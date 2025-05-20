import { Router } from "express";
import { methodHTTP as clienteController } from "../controllers/clientes.controllers.js";

const router = Router();

// POST /api/clientes - Crear un nuevo cliente
router.post("/", clienteController.postClientes);
router.get("/", clienteController.getClientes);
export default router;