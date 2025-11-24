const { db } = require('../config/firebase');

async function getProductos() {
  try {
    const productosRef = db.collection('Productos');
    const snapshot = await productosRef.get();

    if (snapshot.empty) {
      console.log('No hay productos');
      return [];
    }

    const productos = [];
    snapshot.forEach(doc => {
      productos.push({ id: doc.id, ...doc.data() });
    });

    return productos;
  } catch (error) {
    console.error('Error obteniendo productos:', error);
    throw error;
  }
}


module.exports = { getProductos };