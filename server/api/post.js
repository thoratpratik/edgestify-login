const axios = require('axios');
const express = require('express');
const User = require('../model/User');
const router = express.Router();
const Post = require('../model/Post');



// Posting posts from user

router.post('/post',async (req,res) => {
     const {post,comment,like } =req.body
     //res.send(comment);

     try {
        
      const createdPost =  new Post({
            post,
            comment,
            like
      }) 

       await createdPost.save();
       res.send(createdPost);



     } catch (error) {
         console.log(error.message);
     }
});

module.exports = router;