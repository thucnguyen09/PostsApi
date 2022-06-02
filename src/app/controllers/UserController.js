const User = require('../models/User')
class UserController {
    //[GET] /
    async getAllUser(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);         
        } catch (err) {
            res.status(500).json(err);
        }
    };
    //[GET]/:id
    async getUserById(req, res) {
        try{
            const user =  await User.findOne({ id: req.params.id });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    };
    //[POST] /
    async create(req, res) {
        try{
            const newUser = new  User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    };
    //[PUT] /:id
    async update(req, res) {
        try{
            await User.updateOne({id: req.params.id}, req.body);
            res.status(200).json("Cập nhật user có id là: "
                + req.params.id +" thành công!");
   
        } catch (err) {
            res.status(500).json(err);
        }
    };
    //[DELETE]/
    async delete(req, res) {
        try{
            await User.deleteOne({id: req.params.id});
            res.status(200).json("Xóa user có id là: "
                + req.params.id + " thành công");
        } catch (err) {
            res.status(500).json(err);
        }
    };
}

module.exports = new UserController();