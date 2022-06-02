const postsRoute = require('./posts');
const userRoute = require('./user');
function route(app) {
    app.use('/v1/api/user', userRoute);
    app.use('/v1/api/posts', postsRoute);
}
module.exports = route;