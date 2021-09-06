var express = require('express');
var router = express.Router();
var auth = require('../utiti/authen')
var productController = require('../controllers/productController');
var categoryController = require('../controllers/categoryController');

/* GET Product */
router.get('/products',async function(req, res, next) {
  let danhSach= await productController.getListProducts()
  res.send(danhSach);
});
/* GET Product detail. */
router.get('/products/:id', async function(req, res, next) {
  let id =req.params.id
  let product = await productController.getProductById(id)
  res.send(product);
});
router.get('/phanloai',async function(req, res, next) {
  
  let loaiSP = await categoryController.getListCategory()
  res.render(loaiSP);
});
/* GET add phanloai. */
router.get('/phanloai/:id', async function(req, res, next) {
  let category = await categoryController.getProductById(id)
  res.render(category);

});

/* POST add new page. */
// router.post('/add-product', function(req, res, next) {
//    req.body={...req.body,img:'images/'+req.file.originalname}
//    productController.addNew(req.body)
//   res.redirect('/products')
//   });

module.exports = router;
