const signupModel = require('../models/signupModel');

const followingListController = async (req, res) =>{
                                          try
                                          {
                                            const {email} = req.body;

                                              const followingListDetails = await signupModel.findOne({email}).populate("following");
                                              // const allPostDetails = await postModel.find().populate("postedBy", "_id, uname");  /*if only need for _id and uname*/
                                              return res.status(200).json({followingListDetails});  //if in {var} stores in that var, else blank []

                                          }catch(e)
                                            {
                                                console.error(e);
                                                return res.status(422).json({error : "Failed to fetch my posted data"});
                                            }
                                       }

module.exports = followingListController;
