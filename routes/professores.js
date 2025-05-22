const express = require('express');
const router = express.Router();
const controller = require('../controllers/professorController');

router.get('/', controller.index);
router.post('/', controller.create);
router.post('/edit/:id', controller.update);
router.post('/delete/:id', controller.delete);

module.exports = router;