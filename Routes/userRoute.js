const express = require('express');
const { CreateUser, allUser, Login, OneUser } = require('../Controller/userController');
const router = express.Router()
const { verifyAccessToken } = require("../Middlewares/jwt")


//homepage
router.get('/all', verifyAccessToken, allUser)
router.get('/user/:id', verifyAccessToken, OneUser)
router.post('/add-user', CreateUser)
router.post('/login', Login)


module.exports = router