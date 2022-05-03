const LoginModel = require('../database/models/LoginModel')

class LoginRepository {
  async add(login) {
    try {
      return await LoginModel.create(login)
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectByFilter(filter) {
    try {

      console.log(filter);
      
      return await LoginModel.findOne({
        where: filter
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = LoginRepository