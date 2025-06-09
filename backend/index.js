

const express = require('express');
const cors = require('cors');
require('./db/connection');
const productosRoutes = require('./routes/productos.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRoutes);


// Ruta base
app.get('/', (req, res) => {
  res.send('API Sistema de Ventas');
});

// Levantar servidor
app.listen(3001, () => {
  console.log('Servidor en http://localhost:3001');
});
