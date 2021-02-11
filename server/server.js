const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const app = express();

const PORT = 5000;
const CONNECTION_URL = `mongodb+srv://pratik1:pratik@123@edgestify.rnv5i.mongodb.net/test?retryWrites=true&w=majority`

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('connected')
})

app.use('/',require('./api/authentication'));
app.use('/',require('./api/post'));


const connection = async () => {
    try {
        await mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true, })
        console.log('Mongo Connected');
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`)
        });
    
        } catch (error) {
            console.error(error.message)
        }
    
}

connection();
            
