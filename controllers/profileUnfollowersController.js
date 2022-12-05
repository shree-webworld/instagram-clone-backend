const postModel = require('../models/postModel');
const signupModel = require("../models/signupModel");

const profileUnfollowersController = async (req, res) =>{
                                              try
                                              {
                                                console.log(req.body.unfollowId);
                                                signupModel.findByIdAndUpdate(req.body.unfollowId,
                                                                              { $pull:{followers:req.user._id} },
                                                                              { new:true },
                                                                              (err,result)=>{
                                                                                              if(err)
                                                                                              {
                                                                                                return res.status(422).json({error:err});
                                                                                              }
                                                signupModel.findByIdAndUpdate(req.user._id,
                                                                              {$pull:{following:req.body.unfollowId}},
                                                                              {new:true}).select("-password")
                                                                              .then(result =>{
                                                                                              res.status(200).json(result);
                                                                                             }
                                                                                    )
                                                                                            }
                                                                              )

                                              }catch (e)
                                                {
                                                  console.log(e);
                                                  return res.status(404).json({error:"Profile unfollowers not found"});
                                                }
                                          }

module.exports = profileUnfollowersController;
