const express = require('express');
const { getProductos } = require('../services/producto_service');

const router = express.Router();

router.get('/api', (req, res) => {
  console.log('API endpoint called');
  res.json({ message: 'API funcionando correctamente' });
});

router.get('/api/producto', async (req, res) => {
  try {
    const productos = await getProductos();
    const categorias = productos.map(p => p.precio);
    res.json(categorias);
  } catch (error) {
    console.error('Error en /api/producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;