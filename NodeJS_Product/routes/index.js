var express = require('express');
var router = express.Router();
var jwt= require('jsonwebtoken');
var auth = require('../utiti/authen');
var userController = require('../controllers/userController')

 var users=[
   {id:1,username:'admin',password:'1'} 
 ]


router.get('/' ,auth.authenticate,function(req, res, next) {
//kiemtra login



  res.redirect('/products')
});

//GEt login
router.get('/login',function(req, res, next){
res.render('login')
});

//POST login
router.post('/login',async function(req, res, next){
  let{username,password}=req.body
  let user=await userController.login(username,password)
  if(user){
var token=jwt.sign({user},process.env.JWT_KEY);
req.session.token=token;
res.redirect("/products")
}else{
  res.redirect,('/login')
}
  });

//GEt logout
router.get('/logout',function(req, res, next){
  req.session.destroy(function(err) {
    // cannot access session here
    res.redirect('/login')
  })
  });

module.exports = router;
