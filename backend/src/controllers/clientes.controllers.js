import getConnection from "../db/database.js";

const postClientes = async (req, res) => {
    try {
        const { 
            ClienteID,
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax
        } = req.body;
        
        const cliente = {
            ClienteID,
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax
        };
        
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET ?", cliente);
        res.status(201).json({message: "Cliente creado exitosamente", data: result});
    } catch (error) {
        res.status(500).json({message: "Error al crear cliente", error: error.message});
    }
}
const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(`
            SELECT 
                ClienteID,
                Compania,
                Contacto,
                Titulo,
                Direccion,
                Ciudad,
                Regiones,
                CodigoPostal,
                Pais,
                Telefono,
                Fax
            FROM clientes
            ORDER BY Compania ASC
        `);
        
        if(result.length === 0) {
            return res.status(404).json({ 
                message: "No se encontraron clientes registrados" 
            });
        }
        
        res.json({
            success: true,
            count: result.length,
            data: result
        });
        
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        res.status(500).json({ 
            success: false,
            message: "Error interno del servidor al obtener clientes",
            error: error.message 
        });
    }
}



export const methodHTTP = {
    postClientes,
    getClientes 
}