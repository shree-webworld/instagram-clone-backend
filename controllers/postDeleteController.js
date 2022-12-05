const postModel = require('../models/postModel');

const postDeleteController = async (req, res) =>{
                                                    try
                                                    {
                                                      console.log(req.params.postId);
                                                      const post_exits = await postModel.findById({_id:req.params.postId});
                                                      if(!post_exits)
                                                      {
                                                        res.status(404).json({error:"Post not found."})
                                                      }
                                                      await postModel.findByIdAndDelete({_id:req.params.postId});
                                                      res.status(200).json({message:"Post deleted successfully"});

                                                    }catch (e)
                                                     {
                                                        console.log(e);
                                                     }
                                                }

module.exports = postDeleteController;
