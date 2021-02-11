const axios = require('axios');
const express = require('express');
const User = require('../model/User');

const router = express.Router();


// POST  == login user 

router.post('/login', async (req,res) => {
    const {email,password} = req.body;
    
    try {
        
        let user = await User.findOne({email});

        if(!user){
            return res.send({msg: `cannot find mentioned user ${email}`})
        }

        if(password === user.password){
            res.send(user);
        }
        else{
            res.send("Invalid Credentials");
        }
            

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
})


// POST == Register user

router.post('/register' ,async  (req,res) => {

    const {name, email, password} = req.body;

    try {
        const user = new User({
            name,
            email,
            password
        })

        await user.save()
        res.send(user);
    } catch (error) {
        console.log(error.message);
    }
    


})

module.exports =  router;