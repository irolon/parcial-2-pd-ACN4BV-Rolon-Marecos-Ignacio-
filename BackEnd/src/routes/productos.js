const express = require('express');
const { getProductos } = require('../services/producto_service');

const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

router.get('/api/productos', async (req, res) => {
  try {
    const productos = await getProductos();
    res.json(productos);
  } catch (error) {
    console.error('Error en /api/productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Endpoint para obtener un producto específico por ID
router.get('/api/productos/:id', async (req, res) => {
  try {
    const productos = await getProductos();
    const producto = productos.find(p => p.id === req.params.id);
    
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    res.json(producto);
  } catch (error) {
    console.error('Error en /api/productos/:id:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});



module.exports = router;