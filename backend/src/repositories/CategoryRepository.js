const CategoryModel = require('../database/models/CategoryModel')

class CategoryRepository {
  async add(category) {
    try {
      return await CategoryModel.create(category)
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectAll() {
    try {
      console.log('entrei...')
      return await CategoryModel.findAll()
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await CategoryModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async update(id, key, category) {
    try {
      return await CategoryModel.update(category,{where: {id:id, key:key}})
    } catch (error) {
      console.log(error.message)
    }
  }

  async remove(id, key) {
    try {
      return await CategoryModel.destroy({where: {id:id, key:key}})
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = CategoryRepository