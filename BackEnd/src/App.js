const express = require('express');
const cors = require('cors');
const path = require('path');
const productosRoutes = require('./routes/productos');
const orderRoutes = require('./routes/order'); 
const app = express();
const ROOT_FOLDER = path.join(__dirname, '../dist');

app.use(cors());
app.use(express.json());
app.use(express.static(ROOT_FOLDER));
app.use(productosRoutes);
app.use(orderRoutes);

module.exports = app;