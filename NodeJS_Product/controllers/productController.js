var productServices = require('../sevices/productsSevices')


exports.getListProducts = async function getListProducts(){
    return await productServices.getListProducts();
}
exports.getProductById = async function getProductById(id){
   return await productServices.getProductById(id)
}
exports.addNew = async function addNew(params){
    let{name,price,date,idLoaiSP,img}=params
    let sp= {
    name:name,
    price:price,
    date:date,
    img:img,
    idLoaiSP:idLoaiSP
  } 
  await productServices.addNew(sp)
}
exports.editProduct =async function editProduct(_id,params){
    let{name,price,date,idLoaiSP,img}=params
    let product = {_id,name,price,date,idLoaiSP,img}
   await productServices.editProduct(product)   
}
exports.remove = async function removeProductById(id){
await productServices.remove(id)
}