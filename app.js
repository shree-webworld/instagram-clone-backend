
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require("colors");
require('./utils/connectionDB');
const auth = require('./middlewares/auth');
const dotenv = require('dotenv');
dotenv.config({ path:'config.env'});




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false } ));
app.use(cors());
const PORT = process.env.PORT||5001;


app.use(require("./routes/signupRouter"));
app.use(require("./routes/signinRouter"));
app.use(require("./routes/postRouter"));
app.use(require("./routes/profileRouter"));


app.get("/", (req, res)=>{
                            res.send(`hello world from Instagram clone app.`);
                          }
        );

app.listen(PORT , () =>{
                          console.log(`Instagram clone app server is running on http://localhost:${PORT}`.rainbow.bold);
                       }
          );



app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});


























/*let whitelist = ['http://127.0.0.1:5173'];
let corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) =>
  {
    /*if(whitelist.includes(origin))
      return callback(null, true)
             callback(new Error('Not allowed by CORS'));****


             if (whitelist.indexOf(origin) !== -1)
             {
                callback(null, true)
             }
             else
             {
                 callback(new Error('Not allowed by CORS'))
             }
  },
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}*/


/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  next();
});*/
