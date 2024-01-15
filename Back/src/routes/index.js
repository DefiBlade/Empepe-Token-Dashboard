const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();
router.post('/register', userController.register)
router.post('/check_connection', userController.checkConnection)

module.exports = router;
