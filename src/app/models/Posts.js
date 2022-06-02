const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Posts = new Schema({
    userId: {
        type: Number
    },
    id: {
        type: Number
    },
    title: {
        type: String, required: true
    },
    body: {
        type: String, required: true
    }
});

module.exports = mongoose.model('Posts', Posts);