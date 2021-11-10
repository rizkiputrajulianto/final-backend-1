const express = require('express');
const router = express.Router();
const UserLogin = require('./login.userController');
const UserRegister = require('./register.userController');
const getUsers = require("./get.usersController");
const validator = require('../../helpers/validator');


router.post('/login',UserLogin.validation,validator, UserLogin.service);
router.post('/register',UserRegister.validation, validator, UserRegister.service);
router.get('/', getUsers.service);
router.get('/:username', getUsers.service);

module.exports = router;