const postModel = require('../models/postModel');

const allPostController = async (req, res) =>{
                                          try
                                          {
                                              const allPostDetails = await postModel.find().populate("postedBy").populate("comments.postedBy").sort("-createdAt");
                                              // const allPostDetails = await postModel.find().populate("postedBy", "_id, uname"); sort in desending order so -minus sign  /*if only need for _id and uname*/
                                              return res.status(200).json({allPostDetails});  //if in {var} stores in that var, else blank []

                                          }catch(e)
                                            {
                                                console.error(e);
                                                return res.status(200).json({error : "Failed to fetch all post data"});
                                            }
                                       }

module.exports = allPostController;
