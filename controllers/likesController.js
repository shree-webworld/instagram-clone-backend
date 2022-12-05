const postModel = require('../models/postModel');

const likesController = async (req, res) =>{
                                          try
                                          {
                                            console.log(req.body.postId);
                                              const likesDetails = await postModel.findByIdAndUpdate(req.body.postId, { $push:{likes:req.user._id} }, { new:true} );

                                              return res.status(200).json(likesDetails);

                                          }catch(e)
                                            {
                                                console.error(e);
                                                return res.status(422).json({error : "Failed to fetch post likes data"});
                                            }
                                       }

module.exports = likesController;
