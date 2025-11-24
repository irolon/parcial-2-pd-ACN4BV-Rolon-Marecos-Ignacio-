const { getProductos } = require('../services/producto_service');


const getAllProductos = async (req, res) => {
    try {
        const productos = await getProductos();
        res.json(productos);
    } catch (error) {
        console.error('Error en /productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getProductById = async (req, res) => {
    try {
        const productos = await getProductos();
        const producto = productos.find(p => p.id === req.params.id);
        
        if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        res.json(producto);
    } catch (error) {
        console.error('Error en getProductoById:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }    
};

module.exports = {
    getAllProductos,
    getProductById
};