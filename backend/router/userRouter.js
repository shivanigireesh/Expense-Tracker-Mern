const express = require('express');
const { loginController, logoutController, signupContorller } = require('../controller/userController');
const router = express.Router();

router.post('/auth/login' ,loginController);
router.get('/auth/logout', logoutController);
router.post('/auth/signup', signupContorller);

module.exports = router;