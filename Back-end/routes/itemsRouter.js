const express = require('express');
const router = express.Router();

const controller = require('../controllers/itemsController');

router.route('/getItems')
.get(controller.getItems);

module.exports = router; 