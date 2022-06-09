const express = require('express');
const router = express.Router();

const controller = require('../controllers/loginCheckerController');

router.route('/validifyLogin')
.post(controller.validifyLogin)

module.exports = router;

