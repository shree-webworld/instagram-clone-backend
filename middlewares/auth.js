const jwt = require("jsonwebtoken");
const colors = require("colors");

const User = require("../models/signupModel.js");

/*const auth = async (req, res, next) =>
{
    try {
          // const token = req.header("Authorization").replace("Bearer ", "");
        // let val = Cookies.get('jwtoken');
        // console.log(val);
        // let token = req.cookies.jwtoken;

        let token;

          if (req.headers.authorization && req.headers.authorization.startsWith("Bearer") )
          {
            token = req.headers.authorization.split(" ")[1];
          }

        console.log(`auth token of auth.js- ${token}`.green);
        let decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!user) {
            throw new Error("User not found");
        }

        req.token = token;
        req.user = user;
        // req.userID = user._id;
        next();

    } catch (e) {
        console.log(e.red);
        return res.status(401).json({ error: "Unauthenticated" });
    }
};*/

const auth =  (req, res, next) =>{
                            try{
                                   const {authorization} = req.headers;

                                   if(!authorization)
                                   {
                                      return res.status(401).json({error:"you must be logged in"});
                                   }

                                   const token = authorization.replace("Bearer ","");

                                   jwt.verify(token, process.env.SECRET_KEY, async (err, payload) => {
                                                                                                  if(err)
                                                                                                  {
                                                                                                      return  res.status(401).json({error:"you must be logged in"});
                                                                                                   }

                                                                                                   const {_id} = payload;

                                                                                                    const userdata = await User.findById(_id);
                                                                                                    req.user = userdata;
                                                                                                    next();
                                                                                                }
                                              );
                                }catch(e)
                                 {
                                   console.log(e);
                                 }

                              }





module.exports = auth;
