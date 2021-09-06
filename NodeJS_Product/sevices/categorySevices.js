var CategoryModel= require('../models/categoryModels')
  exports.getListCategory= async function getListCategory(){
    return await CategoryModel.find()
  }
  exports.getProductById = async function getProductById(id){
    let pl = await CategoryModel.findById(id)
    pl.id=pl._id
     return pl
}
exports.addNew = async function addNew(product){
    let pro = new CategoryModel(product)
    await pro.save()
}
exports.editProduct = async function editProduct(pl){
  let pro = await CategoryModel.findById(pl._id)
  if(pro){
    pro.name=pl.name
    await pro.save()
  }
}


exports.remove = async function removeProductById(id){
  await CategoryModel.remove({_id:id})
    }