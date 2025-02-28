const express = require('express');
const api = express.Router();
const userController =require('../controllers/userController');

api.post('/user',userController.createUser);
api.get('/users',userController.getUsers);
api.put('/user/update/:id',userController.updateUser);
api.delete('/user/delete/:id',userController.deleteUser);

module.exports = api;