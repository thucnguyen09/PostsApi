const Posts = require('../models/Posts');
const Users = require('../models/User');
class PostsController {
    //[POST] /
    async create(req, res) {
        try{
            if(req.body.userId) {
                const users = await Users.find();
                let isUser = await users.find(user => {
                    return user.id === req.body.userId;
                });
                if(isUser) {
                    const posts = new Posts(req.body);
                    const savePosts = await posts.save();
                    res.status(200).json(savePosts);
                    return;
                }
                res.status(400).json("message: userId không tồn tại!");
            }
        } catch(err) {
            res.status(500).json(err);
        }
    };
    //[GET]/
    async getAllPosts(req, res) {
        try{
            const getPosts = await Posts.find();
            res.status(200).json(getPosts);
        } catch(err) {
            res.status(500).json(err);
        }
    }
    //[GET]/:id
    async getPostsById(req, res) {
        try{
            const posts = await Posts.findOne({id: req.params.id});
            res.status(200).json(posts);
        } catch(err) {
            res.status(500).json(err);
        }
    };
    //[PUT]/:id
    async update(req, res) {
        try{
            await Posts.updateOne({id: req.params.id}, req.body);
            res.status(200).json("cập nhập bài posts có id là: " 
                + req.params.id + " Thành công!");
        } catch(err) {
            res.status(500).json(err);
        }
    };
    //[DELETE]/:id
    async delete(req, res) {
        try{
            await Posts.deleteOne({id: req.params.id});
            res.status(200).json("Xóa bài posts có id là: " 
                    + req.params.id + " thành công!");
        } catch(err) {
            res.status(500).json(err);
        }
    };
}

module.exports = new PostsController();