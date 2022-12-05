const postModel = require('../models/postModel');

const commentsController = async (req, res) =>{
                                          try
                                          {
                                            // console.log(req.body.postId);
                                            const comment = {
                                                              text:req.body.text,
                                                              postedBy:req.user._id
                                                            }
                                              const commentsDetails = await postModel.findByIdAndUpdate(req.body.postId, { $push:{comments:comment} }, { new:true} ).
                                                                      populate("comments.postedBy").populate("postedBy");
                                                                   // .populate("comments.postedBy","_id name")

                                              return res.status(200).json(commentsDetails);

                                          }catch(e)
                                            {
                                                console.error(e);
                                                return res.status(422).json({error : "Failed to fetch post comments data"});
                                            }
                                       }

module.exports = commentsController;
