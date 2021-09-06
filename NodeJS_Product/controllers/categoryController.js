var categorySevices= require('../sevices/categorySevices')

exports.getListCategory = async function getListCategory(){
    return await categorySevices.getListCategory()
}
exports.getProductById = async function getProductById(id){
    return await categorySevices.getProductById(id)
 }
 exports.addNew = async function addNew(params){
     let{name}=params
     let pl={
     name:name
   } 
   await categorySevices.addNew(pl)
 }


 exports.editProduct =async function editProduct(_id,params){
  let{name}=params
  let pl={_id,name}
 await categorySevices.editProduct(pl)   
}
 exports.remove = async function removeProductById(id){
    await categorySevices.remove(id)
    }