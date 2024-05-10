const express = require('express')
const { createUser, getAllUser, deleteUser, udpateUser } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/', getAllUser)
userRouter.post('/', createUser)
userRouter.delete('/:id', deleteUser)
userRouter.put('/:id', udpateUser)


module.exports = userRouter