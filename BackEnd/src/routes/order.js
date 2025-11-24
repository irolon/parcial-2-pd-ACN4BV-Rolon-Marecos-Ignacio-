const express = require('express');
const { crearOrderFirebase } = require('../services/order_service');

const router = express.Router();


router.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body;
    
    console.log('Datos de orden recibidos:', orderData);
    
    // Validar datos requeridos
    if (!orderData.comprador || !orderData.items || !orderData.total) {
      return res.status(400).json({ error: 'Faltan datos requeridos (comprador, items, total)' });
    }

    // Crear orden en Firebase
    const orderId = await crearOrderFirebase(orderData);
    
    res.status(201).json({ 
      success: true, 
      orderId: orderId,
      message: 'Orden creada exitosamente' 
    });
  } catch (error) {
    console.error('Error creando orden:', error);
    res.status(500).json({ error: 'Error interno del servidor: ' + error.message });
  }
});

module.exports = router;