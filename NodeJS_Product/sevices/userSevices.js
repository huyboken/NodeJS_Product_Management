var userModel = require('../models/userModel')

  exports.login= async function login(username, password){
      return await userModel.findOne({username:username, password:password})
  }


     