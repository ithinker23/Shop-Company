const express = require('express');
const router = express.Router();

const controller = require('../controllers/itemsController');

// route the request to itemsController
router.route('/getItems')
.post(controller.getItems);

module.exports = router; 