import getConnection from "../db/database.js";

const updateProductos = async (req, res) => {
    try {
        const {id} = req.params;
        const {ProductoNombre, PrecioUnitario} = req.body;
        
        const producto = {
            ProductoNombre,
            PrecioUnitario
        };
        
        const connection = await getConnection();
        const result = await connection.query(
            "UPDATE productos SET ? WHERE ProductoID = ?", 
            [producto, id]
        );
        
        if(result.affectedRows === 0) {
            return res.status(404).json({message: "Producto no encontrado"});
        }
        
        res.json({message: "Producto actualizado exitosamente", data: result});
    } catch (error) {
        res.status(500).json({message: "Error al actualizar producto", error: error.message});
    }
}
const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        
        // Consulta para obtener productos con información de categoría
        const result = await connection.query(`
            SELECT 
                p.ProductoID,
                p.ProductoNombre,
                p.ProveedorID,
                p.CategoriaID,
                c.CategoriaNombre,
                p.CantidadPorUnidad,
                p.PrecioUnitario,
                p.UnidadesStock,
                p.UnidadesPedidas,
                p.NivelReorden,
                p.Discontinuado
            FROM productos p
            LEFT JOIN categorias c ON p.CategoriaID = c.CategoriaID
            ORDER BY p.ProductoNombre ASC
        `);
        
        if(result.length === 0) {
            return res.status(404).json({ 
                success: false,
                message: "No se encontraron productos registrados" 
            });
        }
        
        res.json({
            success: true,
            count: result.length,
            data: result
        });
        
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ 
            success: false,
            message: "Error interno del servidor al obtener productos",
            error: error.message 
        });
    }
}

export const methodHTTP = {
    updateProductos,
    getProductos 
}