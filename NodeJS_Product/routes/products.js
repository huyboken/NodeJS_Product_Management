var express = require('express');
var router = express.Router();
var auth = require('../utiti/authen');
var productController = require('../controllers/productController');
var categoryController = require('../controllers/categoryController')
var upload = require('../utiti/upload')

//GET phanloai
router.get('/phanloai',async function(req, res, next) {
  
  let loaiSP = await categoryController.getListCategory()
  res.render('phanloai', {loaiSP:loaiSP});
});
/* GET add phanloai. */
router.get('/phanloai/new-phanloai', async function(req, res, next) {
  res.render('new-phanloai');

});
/* {POST} add phanloai. */
router.post('/phanloai/new-phanloai', async function(req, res, next) {
await categoryController.addNew(req.body)
res.redirect('/products/phanloai')
});
/* GET update phanloai. */
router.get('/phanloai/edit-phanloai/:id',async function(req, res, next) {
  let id =req.params.id
  let pro =await categoryController.getProductById(id)
  res.render('edit-phanloai',{pl:pro});
});

/* POST update phanloai. */
router.post('/phanloai/edit-phanloai/:id',async function(req, res, next) {
let {id} = req.params
let {body} = req
await categoryController.editProduct(id,body)
res.redirect('/products/phanloai')
});



/* DELETe  phanloai. */
router.delete('/phanloai/delete/:id', async function(req, res, next) {
  let id = req.params.id
   await categoryController.remove(id)
    res.send({res:true})
  });
  







/* GET home page. */
router.get('/', auth.authenticate,async function(req, res, next) {
let list = await productController.getListProducts()
  res.render('products', { list});
});

/* GET add page. */
router.get('/add', async function(req, res, next) {
  let loaiSP = await categoryController.getListCategory()
  res.render('new-products',{loaiSP});

});


var middle=[auth.authenticate,upload.single('img')]
/* POST add new product page. */
router.post('/add-product', middle, async function(req, res, next) {
// req.body={...req.body,img:'images/'+req.file.originalname}

  let { body } = req
  if (req.file) {
    let imgUrl = req.file.originalname
    body = {...body, img: imgUrl}
  }
await productController.addNew(body)
res.redirect('/products')
});

/* GET update product. */
router.get('/edit-product/:id',async function(req, res, next) {
  let id =req.params.id
  let pro =await productController.getProductById(id)
  let loaiSP = await categoryController.getListCategory()
  res.render('edit-product',{product:pro,loaiSP});
});

/* POST update product. */
router.post('/edit-product/:id',middle,async function(req, res, next) {
let {id} = req.params
let { body } = req
if (req.file) {
  let imgUrl = req.file.originalname
  body = {...body, img: imgUrl}
}
await productController.editProduct(id,body)
res.redirect('/products')
})

/* DELETe  product. */
router.delete('/delete/:id', async function(req, res, next) {
let id = req.params.id
 await productController.remove(id)
  res.send({res:true})
});


module.exports = router;
