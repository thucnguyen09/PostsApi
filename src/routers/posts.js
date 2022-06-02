const route = require('express').Router();
const postsController = require('../app/controllers/postsController');

route.delete('/:id', postsController.delete);
route.put('/:id', postsController.update);
route.post('/', postsController.create);
route.get('/:id', postsController.getPostsById);
route.get('/', postsController.getAllPosts);


module.exports = route;