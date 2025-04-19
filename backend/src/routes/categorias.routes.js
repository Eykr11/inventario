import {Router} from "express"
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorrias);
//ruta de un solo parametro get
router.get("/:id", categoriaController.getCategory);
router.delete("/:id", categoriaController.deleteCategory);
//ruta con parametro tanto el id como el cuerpo para actualizar
router.put("/:id", categoriaController.updatetCategorrias);
export default router;