import { Router } from "express";
import { methodHTTP as empleadoController } from "../controllers/empleados.controllers.js";

const router = Router();

// GET /api/empleados - Obtener todos los empleados
router.get("/", empleadoController.getEmpleados);

router.post("/", empleadoController.createEmpleado);
router.put("/:id", empleadoController.updateEmpleado);
router.delete("/:id", empleadoController.deleteEmpleado);

export default router;

