
const Product=require('../models/productModels')

const getProducts =async(req,res)=> {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (e) {
       console.log(e)
       res.status(500).json({message: "Couldn't get products"}) 
    }
    }


    const getProductById=async (req,res)=>{
        try {
            const {id} =req.params;
            const product = await Product.findById(id);
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    const deleteProduct=async(req,res)=>{
        try {
            const {id}=req.params
            const product= await Product.findByIdAndDelete(id);
            if(!product){
                return res.status(404).json({message:eror.message})
            
            }
            res.status(200).json({message:"item deleted "})
        } catch (error) {
            res.status(500).json({message:error.message})
            
        }
        }


        const postProduct=async(req,res)=>{
            try {
                const product=await Product.create(req.body)
                res.status(200).json(product)
              
            } catch (error) {
                console.log(error.message);
                res.status(500).json({message:error.message})
            }
          
        }
    module.exports={
        getProducts,
        deleteProduct,
        postProduct,
        getProductById
    }