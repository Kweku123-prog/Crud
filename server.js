const express =require('express')
const app =express()
const mongoose =require('mongoose')
/// declare routh 
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello Node Api')
})

app.get('/post',(req,res)=>{
    res.send('we love food')
})

app.post('/product',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})
mongoose.set('strictQuery',false)
mongoose.connect('mongodb+srv://kcquansah:ashesi2023@userap.pczw6sm.mongodb.net/Node-Api?retryWrites=true&w=majority')
.then(()=>
{
  
    
 console.log('Connected to MongoDB')   
 app.listen(3500,()=>{
    console.log(`Node Api app is runnng on port 3000`)
})
}
).catch(()=>{
    console.log(eror)
})