const postModel = require('../models/postModel');

const myPostController = async (req, res) =>{
                                          try
                                          {
                                              const myPostDetails = await postModel.find({postedBy:req.user._id}).populate("postedBy").sort("-createdAt");
                                              // const allPostDetails = await postModel.find().populate("postedBy", "_id, uname");  /*if only need for _id and uname*/
                                              return res.status(200).json({myPostDetails});  //if in {var} stores in that var, else blank []

                                          }catch(e)
                                            {
                                                console.error(e);
                                                return res.status(422).json({error : "Failed to fetch my posted data"});
                                            }
                                       }

module.exports = myPostController;
