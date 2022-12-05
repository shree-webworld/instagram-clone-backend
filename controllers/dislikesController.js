const postModel = require('../models/postModel');

const dislikesController = async (req, res) =>{
                                          try
                                          {
                                              console.log(req.body.postId);
                                              const dislikesDetails = await postModel.findByIdAndUpdate(req.body.postId, { $pull:{likes:req.user._id} }, { new:true} );

                                              return res.status(200).json(dislikesController);

                                          }catch(e)
                                            {
                                                console.error(e);
                                                return res.status(422).json({error : "Failed to fetch post likes data"});
                                            }
                                       }

module.exports = dislikesController;
