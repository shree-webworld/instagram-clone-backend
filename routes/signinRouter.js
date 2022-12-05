


const express = require('express');
const router = new express.Router();


const signinController = require("../controllers/signinController");
const auth = require('../middlewares/auth');
const asyncHandler = require('express-async-handler');




router.post("/api/signin_api", asyncHandler(signinController) );
router.get("/api/signin_api", (req, res)=>
                                      {
                                        res.send(`hello world from chat app ==> signin_api`);
                                      }
          );



module.exports = router;
