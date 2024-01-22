
require('dotenv').config()
const express =require('express')
const app =express()
const mongoose =require('mongoose')
const Product =require('./models/productModels')
const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL
const productRoute=require('./Route/productRoute');
/// declare routh 

app.use('/api/',productRoute);

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