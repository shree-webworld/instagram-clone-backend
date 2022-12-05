const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {ObjectId} = mongoose.Schema.Types;


const signupSchema = new mongoose.Schema({
                                              uname:
                                              {
                                                type: String,
                                                required:true,
                                                trim:true,
                                                minLength:2,
                                                maxLength:30
                                              },
                                              email:
                                              {
                                                type: String,
                                                required:true,
                                                trim:true,
                                                unique:true
                                              },
                                              password:
                                              {
                                                type: String,
                                                required:true,
                                                trim:true,
                                                minLength:2,
                                              },
                                              confirm_password:
                                              {
                                                type: String,
                                                required:true,
                                                trim:true,
                                                minLength:2,
                                              },
                                              profile_pic: {
                                                    type: "String",
                                                    required: true,
                                                    default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
                                                  },
                                              followers:[{
                                                           type:ObjectId,
                                                           ref:"SignupModel"
                                                        }],
                                              following:[{
                                                           type:ObjectId,
                                                           ref:"SignupModel"
                                                         }],
                                              date:
                                              {
                                                type:Date,
                                                default:Date.now
                                              },
                                              /*tokens: [
                                                          {
                                                              token:
                                                              {
                                                                  type: String,
                                                                  required: true,
                                                              },
                                                          },
                                                      ]*/
                                          },{
                                                timestamps: true
                                            }
                                        );


                                        signupSchema.pre("save", async function (next)
                                        {
                                            if (this.isModified("password"))
                                            {
                                                this.password = await bcrypt.hash(this.password, 12);
                                                // this.confirm_password = await bcrypt.hash(this.confirm_password, 12);
                                            }

                                            next();
                                        });


                                        /*signupSchema.methods.generateAuthToken = async function ()
                                        {
                                            try
                                            {
                                              let token = jwt.sign( { _id:this._id.toString() }, process.env.SECRET_KEY, { expiresIn: "7d" } );
                                              console.log(`generateAuthToken - ${token}`);

                                              this.tokens = this.tokens.concat({ token });
                                              await this.save();

                                              return token;
                                            }catch(e)
                                             {
                                               console.log(e);
                                             }
                                        }*/


//collection(table) creation. model name should always be capital.
//after timestamps we can add { collection : 'ChatSignupModel'}
const SignupModel = mongoose.model('SignupModel', signupSchema);


module.exports = SignupModel;
