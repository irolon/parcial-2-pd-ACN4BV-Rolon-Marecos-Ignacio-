const express = require('express');
const {getAllProductos, getProductById} = require('../controller/producto_controller');

const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

router.get('/api/productos', getAllProductos);

// Endpoint para obtener un producto específico por ID
router.get('/api/productos/:id', getProductById);
    



module.exports = router;