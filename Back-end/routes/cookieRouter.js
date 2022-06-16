const express = require('express');
const router = express.Router();

const controller = require('../controllers/cookieController');


router.route('/:username').post(controller.cookieAuth)

module.exports = router;