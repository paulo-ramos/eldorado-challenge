const UserModel = require('../database/models/UserModel')

class UserRepository {
  async add(user) {
    try {
      return await UserModel.create(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectAll() {
    try {
      return await UserModel.findAll()
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await UserModel.findOne({
        where: filter
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async update(id, key, user) {
    try {
      return await UserModel.update(user,{where: {id:id, key:key}})
    } catch (error) {
      console.log(error.message)
    }
  }

  async remove(id, key) {
    try {
      return await UserModel.destroy({where: {id:id, key:key}})
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = UserRepository