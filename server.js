const express =require('express')
const app =express()

/// declare routh 

app.get('/',(req,res)=>{
    res.send('Hello Node Api')
})
app.listen(3000,()=>{
    console.log(`Node Api app is runnng on port 3000`)
})