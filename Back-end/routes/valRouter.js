const express = require('express');
const router = express.Router();

const controller = require('../controllers/valController');

router.route('/login')
.post(controller.validifyLogin)
router.route('/register')
.post(controller.validifyRegister)

module.exports = router;

