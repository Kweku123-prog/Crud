
const User=require('../models/user')
const bcrypt=require('bcrypt')
const asyncHandler=require('express-async-handler')
const cookieParser = require("cookie-parser");


const {createTokens,validateToken} =require("../JWT")
   //login instancees 
   const login = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName: userName });
    if (!user) {
        return res.status(400).json({ error: "User does not exist" });
    }
    const dbPassword = user.password;
    const match = await bcrypt.compare(password, dbPassword);
    if (!match) {
        return res.status(400).json({ error: "Wrong username and password combination" });
    }else{

        const accessToken =createTokens(user)
        res.cookie("access-token",accessToken,{
            maxAge:30 * 24 * 60 * 60 * 1000 
        })
        res.json("Logged in");
    }
   
});


//register instance 
   const register=asyncHandler(async(req,res)=>{
       const {userName,password} =req.body
       bcrypt.hash(password,10).then((hash)=>{
           User.create({
               userName:userName,
               password:hash,
           }).then(()=>{
               res.json("user registered ")
              
           }).catch((err)=>{
               if(err){
                   res.status(400).json({eror:err});
               }
           })

       })
   })


   const getUsers=asyncHandler(async(req,res)=>{
     try {
        const users=User.find()
        res.statusCode(200).json(users)
     } catch (error) {
        res.status(500)
        throw new Error(eror.message)
        
     }
   })


   const profile= asyncHandler(async(req, res) => {
    try {
        const users= await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
        
    }
  })
module.exports={
    login,
    register,
    getUsers,
    profile
}