
const express = require('express');
const router = new express.Router();
const asyncHandler = require('express-async-handler');
const auth = require("../middlewares/auth");


const signupController = require("../controllers/signupController");


router.post("/api/signup_api", asyncHandler(signupController) );
router.get("/api/signup_api", asyncHandler(signupController) );



module.exports = router;
