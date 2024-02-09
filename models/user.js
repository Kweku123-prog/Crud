const mongoose =require('mongoose')




const userSchema=new mongoose.Schema({
 
userName:{
        type:String,
        maxlength:32,
        trim:true,
        unique: true
       
    },
   
    password:{
        type:String,
        required:true
    },
   
  
},{timestamps:true});






module.exports=mongoose.model("User",userSchema)