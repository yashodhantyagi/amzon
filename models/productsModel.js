const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
title:{
    type:String,
     unique:true,
     required:true,
},
price:{
    type:Number,
    required:true,

},
info: {
    category: String,
    brand: String,
    ratingCount: Number,
    ratingValue: Number,
    stock: Number,
    specificOffers: [
        {
            title: String,
            description: String,
        }
    ],
    amazonServices: [
        {
            title: String,
            description: String,
        }
    ]
},
desprition:String,
    images:[String],
    createAt:{
        type:Date,
        default:new Date(),
    },
    updatedAt:{
        type:Date,
        default:new Date(),
    }


    // price:Number,
})

const productModel= mongoose.model('products',productSchema);
module.exports=productModel;
