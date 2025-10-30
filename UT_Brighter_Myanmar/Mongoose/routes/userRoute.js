const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/userController');

router.post('/register', Controllers.register);

module.exports = router;
