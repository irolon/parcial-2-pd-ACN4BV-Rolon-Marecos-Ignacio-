const validarInfoOrder = (req, res, next) => {
  const { comprador, items, total } = req.body;
  
  if (!comprador || !items || !total) {
    return res.status(400).json({ error: 'Faltan datos requeridos (comprador, items, total)' });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Items debe ser un array no vacío' });
  }

  if (typeof total !== 'number' || total <= 0) {
    return res.status(400).json({ error: 'Total debe ser un número mayor a 0' });
  }

  next();
};

module.exports = { validarInfoOrder };