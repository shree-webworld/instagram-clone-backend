const signupSchema = require('../models/signupModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postSignin = async (req, res) =>{
                                          console.log(req.body);
                                          const {email, password} = req.body;

                                          if(!email || !password)
                                          {
                                            return res.status(422).json({error: "Please add all the fields"});
                                          }

                                          try
                                          {
                                            const user_exits = await signupSchema.findOne({email});
                                            if (user_exits)
                                            {
                                                const isMatch = await bcrypt.compare(password, user_exits.password);

                                                if(!isMatch)//if(!user_exits)
                                                {
                                                  console.log("Invalid Credentials");
                                                  return res.status(404).json({error:"⚠️Invalid Credentials"});
                                                }else
                                                  {
                                                    // let token = await user_exits.generateAuthToken();
                                                    let token = jwt.sign({_id: user_exits._id}, process.env.SECRET_KEY);
                                                    console.log("The token is --> "+token+" for user --> "+user_exits.email);

                                                    console.log("Login successfully");
                                                    return res.status(200).json({user_exits, token});
                                                  }

                                            }else
                                              {
                                                console.log("Invalid Credentials");
                                                return res.status(404).json({error:"⚠️Invalid Credentials"});
                                              }


                                          } catch (e)
                                            {
                                              console.log(e);
                                              return res.status(500).json({error: "⚠️Failed to signin"});
                                            }
                                      }




const signinController = async (req, res) =>{
                                              switch (req.method)
                                              {
                                                case "POST":
                                                            await postSignin(req,res);
                                                            break;
                                              }
                                    }
module.exports = signinController;
















/*
.find({ _id: { $eq: req.params.id } }
const usersbyid = await Users.find({ _id: { $ne: req.params.id } });

const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
*/
