const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const postSchema = new mongoose.Schema({
    post_title:{
        type:String,
        required:true
    },
    post_body:{
        type:String,
        required:true
    },
    post_pic_url:{
              type:String,
              required:true
    },
    likes:[{type:ObjectId,ref:"SignupModel"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"SignupModel"}
    }],
    postedBy:{
       type:ObjectId,
       ref:"SignupModel"
    }
},{timestamps:true});

const PostModel =  mongoose.model("PostModel",postSchema);

module.exports = PostModel;


/*default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"*/
