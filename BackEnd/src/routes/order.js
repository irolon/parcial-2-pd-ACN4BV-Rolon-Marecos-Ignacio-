const express = require('express');
const { createOrder } = require('../controller/order_controller');
const { validarInfoOrder } = require('../middlewares/validarorden');

const router = express.Router();



router.post('/api/orders', validarInfoOrder, createOrder);
    

module.exports = router;