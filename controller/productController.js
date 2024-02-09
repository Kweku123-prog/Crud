
const Product=require('../models/productModels')
const asyncHandler=require('express-async-handler')



const getProducts =asyncHandler(async(req,res)=> {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (e) {
        res.status(500)
       throw new Error(eror.message)

    }
    })



    const getProductById=asyncHandler(async (req,res)=>{
        try {
            const {id} =req.params;
            const product = await Product.findById(id);
            res.status(200).json(product)
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
    })

    const deleteProduct=asyncHandler(async(req,res)=>{
        try {
            const {id}=req.params
            const product= await Product.findByIdAndDelete(id);
            if(!product){
                return res.status(404).json({message:eror.message})
            
            }
            res.status(200).json({message:"item deleted "})
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
            
        }
        })


        const postProduct=asyncHandler(async(req,res)=>{
            try {
                const product=await Product.create(req.body)
                res.status(200).json(product)
              
            } catch (error) {
                res.status(500)
                throw new Error(error.message)
            }
          
        })

   const updateProduct=asyncHandler(async(req,res)=>{

    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
       
        if(!product){
            return res.status(404).json({message:`cannot find any product with ${id}`})
        }
        const updatedProduct =await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})



 

    module.exports={
        getProducts,
        deleteProduct,
        postProduct,
        getProductById,
      
        updateProduct

    }