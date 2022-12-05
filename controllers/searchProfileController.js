const postModel = require('../models/postModel');
const signupModel = require("../models/signupModel");

const searchProfileController = async (req, res) =>{
                                              try
                                              {
                                                console.log(req.body);
                                                const {uname} = req.body;

                                                if(!uname)
                                                {
                                                  return res.status(422).json({error: "Please add valid profile name to search"});
                                                }

                                                const profile_exits = await signupModel.findOne({uname});

                                                if(profile_exits)
                                                {
                                                  return res.status(200).json(profile_exits);
                                                }else
                                                  {
                                                    return res.status(404).json({error: "Profile not found"});
                                                  }
                                                /*console.log(req.params.id);

                                                // findOne({_id:req.params.id}).select("-password")  -- if don't want password
                                                const profile_user = await signupModel.findById({_id:req.params.id});
                                                if(profile_user)
                                                {
                                                  const profile_post = await postModel.find({postedBy:req.params.id}).populate("postedBy");
                                                  return res.status(200).json({profile_user, profile_post});
                                                }*/

                                              }catch (e)
                                                {
                                                  console.log(e);
                                                  return res.status(404).json({error:"Profile not found"});
                                                }
                                          }

module.exports = searchProfileController;
