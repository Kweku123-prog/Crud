
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
/// declare routh 
app.use(cors())
//declare json middleware
app.use(express.json())
app.use('/api/product',productRoute);
app.use(errorMiddleware)

app.get('/blog',(req,res)=>{
    res.send('hello server im here for you')
})
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