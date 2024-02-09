const express =require('express')
const Product =require('../models/productModels')
const router=express.Router();
const {getProducts, deleteProduct, postProduct, getProductById,updateProduct} =require('../controller/productController')
const {login,register,getUsers, profile} =require('../controller/userController');
const { validateToken } = require('../JWT');

router.post('/',postProduct)
router.delete('/:id',deleteProduct)
router.get( "/", getProducts)

router.post('/register',register )

router.post('/login',login )
router.get('/profile',profile )



router.get("/:id",getProductById
)
router.get('/register',getUsers)
//update 

router.put('/:id', updateProduct)


module.exports=router;