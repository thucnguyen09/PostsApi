const route = require('express').Router();
const userController = require('../app/controllers/userController');

route.delete('/:id', userController.delete)
route.put('/:id', userController.update)
route.post('/', userController.create);
route.get('/:id', userController.getUserById)
route.get('/', userController.getAllUser);
module.exports = route;