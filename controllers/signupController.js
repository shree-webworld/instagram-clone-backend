const signupModel = require('../models/signupModel');

const postSignup = async (req, res) =>{
                                              console.log(req.body);
                                              const {uname, email, password, confirm_password, profile_pic} = req.body;

                                              if(!uname || !email || !password || !confirm_password || !profile_pic)
                                              {
                                                console.log("Please add all the fields");
                                                return res.status(422).json({error: "Please add all the fields"});
                                              }


                                              const email_exits = await signupModel.findOne({email});
                                              if(email_exits)
                                              {
                                                console.log("Email already registered");
                                                return res.status(400).json({error: "⚠️Email already registered"});
                                              }

                                              if(password != confirm_password)
                                              {
                                                console.log("Password and confirm password don't match");
                                                return res.status(400).json({error: "⚠️Password and confirm password don't match"});
                                              }

                                              try
                                              {
                                                const signupDetails = new signupModel({uname, email, password, confirm_password, profile_pic});
                                                await signupDetails.save();

                                                // const token = await signupDetails.generateAuthToken();

                                                console.log("Registered successfully");
                                                return res.status(201).json(signupDetails);

                                              } catch (e)
                                                {
                                                  console.log(e);
                                                  return res.status(500).json({error: "⚠️Failed to register"});
                                                }

                                            }


const getSignup = async (req, res) =>{
                                        try
                                        {
                                            const signupDetails = await signupModel.find();
                                            return res.status(200).json(signupDetails);
                                        }catch(e)
                                          {
                                              console.error(e);
                                              return res.status(200).json({error : "Failed to fetch data"});
                                          }
                                    }




                                            const signupController = async (req, res) =>{
                                                                                          switch (req.method)
                                                                                          {
                                                                                            case "GET":
                                                                                                       await getSignup(req,res);
                                                                                                        break;
                                                                                            case "POST":
                                                                                                        await postSignup(req,res);
                                                                                                        break;
                                                                                          }
                                                                                }





module.exports = signupController;
