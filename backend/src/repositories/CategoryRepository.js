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

  async update(category) {
    try {
      return await category.save()
    } catch (error) {
      console.log(error.message)
    }
  }

  async remove(id) {
    try {
      return await CategoryModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = CategoryRepository