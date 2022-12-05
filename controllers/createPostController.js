const postModel = require('../models/postModel');

const postCreatePost = async (req, res) => {
                                              console.log(req.body);
                                              const {post_title, post_body, post_pic_url} = req.body;

                                              if(!post_title || !post_body || !post_pic_url)
                                              {
                                                  console.log("Please add all the fields");
                                                  return  res.status(422).json({error:"Please add all the fields"});
                                              }

                                              // console.log(req.user);
                                              // res.json("ok");
                                              try
                                              {
                                                  // req.user.password = undefined;  /*if don't want password to be saved , postedBy: req.user*/
                                                  const postDetails = new postModel({post_title, post_body, post_pic_url, postedBy: req.user});
                                                  await postDetails.save();

                                                  console.log("posted successfully");
                                                  return res.status(201).json(postDetails);

                                              }catch(e)
                                                {
                                                  console.log("postModel error ", e);
                                                  return res.status(500).json({error: "Failed to post"});
                                                }
                                           }


const getCreatePost = async (req, res) => {
                                        try
                                        {
                                            const postDetails = await postModel.find();
                                            return res.status(200).json(postDetails);
                                        }catch(e)
                                          {
                                              console.error(e);
                                              return res.status(200).json({error : "Failed to fetch post data"});
                                          }

                                    }



const createPostController = async (req, res) =>{
                                                   switch (req.method)
                                                   {
                                                       case "POST":
                                                                   await postCreatePost(req,res);
                                                                   break;

                                                       case "GET":
                                                                  await getCreatePost(req, res);
                                                                  break;
                                                    }
                                                }




module.exports = createPostController;
