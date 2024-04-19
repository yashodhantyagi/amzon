const productModel=require('../models/productsModel')
const getAllProducts= async(req,res)=>{
    const q= req.querry;
    // console.log(q);
    let query= await productModel.find(q);
    // data= data.find(q);
    // console.log(querry);
    // query=array.sort('price');
    // console.log(products);
    const products= await query;
    // console.log(data);
    console.log(req.url)
    // console.log(req.url);
    res.json({
        status:'success',
        results: products.length,
        data:{
            products:[],
        }
    })
}
const addProduct = async(req,res)=>{try{
    const data = await productModel.create(req.body);
    console.log(data);
    console.log(req.body);
    res.json({
        status:'sucess',
        result:1,
        data:{
            newProduct:data,
        }
    });}
    catch(err){
        res.status=(403);
        console.log(err);
        res.json({
            status:'fail',
            message:JSON.stringify(err.message),
        });
    }
}
const replaceProduct=async(req,res)=>{
try{

    const reqId = req.params.id;
    const data={...req.body,reqId};
    const result =     await productModel.findOneAndReplace({_id:reqId},data);
    res.json({
        status:'success',
        data:{
            products:result,
        }
    });

}
catch(err){
    res.status(500);
    res.json({
        status:'sucess',
        message:JSON.stringify(err),
    })
}
}

module.exports={
    getAllProducts,
    addProduct,
    replaceProduct
};