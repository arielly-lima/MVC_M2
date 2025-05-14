const express = require('express');
const router = express.Router();
const controller = require('../controllers/professorController');

// Rota principal
router.get('/', controller.index);

// Criar novo professor
router.post('/', controller.create);

// Editar professor
router.post('/edit/:id', controller.update);

// Deletar professor
router.post('/delete/:id', controller.delete);

module.exports = router;