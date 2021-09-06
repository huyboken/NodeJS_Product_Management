var userService = require('../sevices/userSevices')

exports.login= async function login(username, password){
    return await userService.login(username, password)
}