const express = require('express');
const router = express.Router();

// CLIENTES
const clientes = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana García', email: 'ana.garcia@example.com' },
    { id: 3, nombre: 'Carlos López', email: 'carlos.lopez@example.com' }
];

// GET /clientes
router.get('/', (req, res) => {
    res.json(clientes);
});

module.exports = router;
