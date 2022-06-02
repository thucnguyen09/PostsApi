const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/news');
        console.log('connected to mongodb');
    }catch(err){
        console.log('connect failed');
    }
} 

module.exports = {connect};