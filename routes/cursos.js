const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursoController');

router.post('/', controller.create);

module.exports = router; //cria rota