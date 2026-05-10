const express = require('express');
const router = express.Router();

// PRODUCTOS
const productos = [
    { id: 1, nombre: 'Laptop Gamer', precio: 1500 },
    { id: 2, nombre: 'Monitor 4K', precio: 400 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 100 }
];

// GET /productos
router.get('/', (req, res) => {
    res.json(productos);
});

module.exports = router;
