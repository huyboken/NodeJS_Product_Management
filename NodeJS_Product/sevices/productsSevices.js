var categorySevices = require('../sevices/categorySevices')
var ProductModels = require('../models/productsModels')
var convertDate = require('../utiti/convertDate')
  exports.getListProducts = async function getListProducts(){

    let products = await ProductModels.find().populate('idLoaiSP')
      return products
  }
  exports.getProductById = async function getProductById(id){
      let product = await ProductModels.findById(id)
      // product.id=product._id
       return product
  }
  exports.addNew = async function addNew(product){
      let pro = new ProductModels(product)
      await pro.save()
  }
  exports.editProduct = async function editProduct(product){
      let pro = await ProductModels.findById(product._id)
      if(pro){
        pro.name=product.name
        pro.price=product.price
        pro.date=product.date
        pro.idLoaiSP=product.idLoaiSP
        if(product.img){
          pro.img=product.img

        }
        await pro.save()
      }
  }

  exports.remove =async function removeProductById(id){
await ProductModels.remove({_id:id})
  }