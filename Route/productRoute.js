const express =require('express')
const Product =require('../models/productModels')
const router=express.Router();
const {getProducts, deleteProduct, postProduct, getProductById} =require('../controller/productController')


router.post('/',postProduct)
router.delete('/:id',deleteProduct)
router.get( "/", getProducts)



router.get("/:id",getProductById
)

//update 

router.put('/:id', async(req,res)=>{

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


module.exports=router;