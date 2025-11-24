const { db } = require('../config/firebase');

async function crearOrderFirebase(data) {
  try{
      const order = {
        comprador: data.comprador,
        items: data.items,
        total: data.total,
        fecha: new Date()
      }

      const docRef = await db.collection('Orders').add(order);

      return docRef.id;
  } catch (error) {
    console.error('Error creando order:', error);
    throw new Error('Error al guardar la orden: ' + error.message);
  }
}

module.exports = { crearOrderFirebase };