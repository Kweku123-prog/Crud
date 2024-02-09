
require('dotenv').config()
const express =require('express')
const app =express()
const mongoose =require('mongoose')
const Product =require('./models/productModels')
const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL
const productRoute=require('./Route/productRoute');
const errorMiddleware=require('./errorMddleware/errorMddleware.js')
const cors=require('cors')

const cookieParser = require("cookie-parser");
const user = require('./models/user.js')
const { profile } = require('./controller/userController.js')

const {validateToken}=require('./JWT.js')

/// declare routh S
app.use(cors())
//declare json middleware
app.use(express.json())
app.use(cookieParser());
app.use(errorMiddleware)

app.get('/blog',(req,res)=>{
    res.send('hello server im here for you')
})

///user route 
app.use('/api/product',productRoute);
app.use('/api/product/register',productRoute);
app.use('/api/product/login',productRoute);


app.get("api/product/profile",validateToken,profile);





mongoose.set('strictQuery',false)
mongoose.connect(MONGO_URL)
.then(()=>
{
  


    
 console.log('Connected to MongoDB')   
 app.listen(PORT,()=>{
    console.log(`Node Api app is runnng on port ${PORT}`)
})
}
).catch((error)=>{
    console.log(error)
})