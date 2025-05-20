import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";
/* creamos el enrutador */
const router = Router();

/* configuramos repsuesta desde server metodo http get */
router.get("/", categoriaController.getCategorias ); /* para crud - read */
router.post("/", categoriaController.postCategorias ); /* para crud -  create */

/* Ruta que recibe un parametro */
router.get("/:id", categoriaController.getCategory); /* para crud - read 1 sola fila */

/* Ruta que recibe parametro id de categoria a borrar */
router.delete("/:id", categoriaController.deleteCategory); /* para crud - delete 1 sola fila */

/* Ruta que recibe como parametro tanto el cuerpo del id a actualizar */
router.put("/:id", categoriaController.updateCategorias); /* para crud - delete 1 sola fila */

export default router;
 