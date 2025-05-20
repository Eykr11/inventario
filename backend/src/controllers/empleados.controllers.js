import getConnection from "../db/database.js";

// Obtener todos los empleados
const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(`
            SELECT * FROM empleados
        `);
        res.json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Obtener un empleado por ID
const getEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query(`
            SELECT * FROM empleados WHERE EmpleadoID = ?
        `, [id]);
        res.json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Crear nuevo empleado
const createEmpleado = async (req, res) => {
    try {
        const {Nombre, Apellido, Titulo, FechaNacimiento, Direccion} = req.body;
        const empleado = {Nombre, Apellido, Titulo, FechaNacimiento, Direccion};
        const connection = await getConnection();
        const result = await connection.query(`
            INSERT INTO empleados SET ?
        `, empleado);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Actualizar empleado
const updateEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        const {Nombre, Apellido, Titulo, FechaNacimiento, Direccion} = req.body;
        const empleado = {Nombre, Apellido, Titulo, FechaNacimiento, Direccion};
        const connection = await getConnection();
        const result = await connection.query(`
            UPDATE empleados SET ? WHERE EmpleadoID = ?
        `, [empleado, id]);
        res.json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Eliminar empleado
const deleteEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query(`
            DELETE FROM empleados WHERE EmpleadoID = ?
        `, [id]);
        res.json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



export const methodHTTP = {
    getEmpleados,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
}