const express = require('express');
const router = express.Router();

const controller = require('../controllers/cookieController');


router.route('/').post(controller.cookieAuth)
module.exports = router;