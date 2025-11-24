const { crearOrderFirebase } = require('../services/order_service');

const createOrder = async(req, res) => {
    try {
        const orderData = req.body;

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
};

module.exports = {
    createOrder
};