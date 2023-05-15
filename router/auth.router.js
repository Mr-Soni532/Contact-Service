const express = require('express');
const authRouter = express.Router();
const controller = require('../controller/auth.controller.js')

authRouter.post('/register',controller.register )
authRouter.post('/login',controller.login )

module.exports = authRouter