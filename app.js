const express = require('express');
const app = express();
const path = require('path');

// Port configuration
const PORT = process.env.PORT || 9000;

// Routes
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a la API de Laboratorio 07</h1><p>Usa /clientes o /productos para ver los datos.</p>');
});

// Mounting routes
app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

// Server start
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
