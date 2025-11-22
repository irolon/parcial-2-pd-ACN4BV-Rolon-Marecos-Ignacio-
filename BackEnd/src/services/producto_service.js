const { db } = require('../config/firebase');

async function getProductos() {
  const productosRef = db.collection('Producto');
  const snapshot = await productosRef.get();

  if (snapshot.empty) return [];

  const productos = [];
  snapshot.forEach(doc => {
    productos.push({ id: doc.id, ...doc.data() });
  });

  return productos;
}

module.exports = { getProductos };