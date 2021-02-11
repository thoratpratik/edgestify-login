const mongoose = require('mongoose');

const PostSchma = new mongoose.Schema ( {
    post: {
        type:String,
        required:true
    },
    comment: {
        type : [String],
    },
    like:{
        type:Number
    }
})

module.exports = Post = mongoose.model('post',PostSchma);