const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path:'config.env'});
const colors = require("colors");


const DB = process.env.DATABASE;


// mongoose.connect('mongodb://localhost:27017/shree_app',
mongoose.connect(DB ,{useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=> console.log("connection to mongodb atlas web is successfull...".blue.underline))
.catch( (error)=> console.log(`DATABASE connection error --`,error.message.red.bold));
