const express = require('express');
const router = express.Router();

const controller = require('../controllers/cookieController');

router.route('/checkUserCookie').get(controller.checkUserCookie);

module.exports = router;