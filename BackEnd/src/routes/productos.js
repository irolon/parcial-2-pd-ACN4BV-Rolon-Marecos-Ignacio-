const express = require('express');
const {getAllProductos, getProductById} = require('../controller/producto_controller');

const router = express.Router();


router.get('/api/productos', getAllProductos);

router.get('/api/productos/:id', getProductById);
    



module.exports = router;