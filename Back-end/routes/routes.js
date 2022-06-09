'use strict';
const path = require('path');
const controller = require('../controllers/controller.js');

module.exports = (app) => {
    app.route('/checkLoginHandler').get(controller.checkLogin);
}