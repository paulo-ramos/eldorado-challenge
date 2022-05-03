const Category = require('../models/Category')
const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')

class CategoryController {
  constructor(repository) {
    this.repository = repository
  }

  get = async (request, response) => {
    try {
      const categories = await this.repository.selectAll()
  
      return response.status(200).json(createResponseContent(categories))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  getOne = async (request, response) => {
    try {
      const { id } = request.params

      const category = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json(createResponseContent(category))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  post = async (request, response) => {
    try {
      const { name } = request.body

      const newCategory = new Category(name)

      if (!newCategory.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid category' ]))
      }

      const categoryAdded = await this.repository.add(newCategory)
  
      return response.status(200).json(createResponseContent(categoryAdded))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  put = async (request, response) => {
    try {
      const { id } = request.params
      const { name } = request.body

      const categoryToEdit = new Category(name)

      if (!categoryToEdit.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid category' ]))
      }

      const categoryEdited = await this.repository.update({ id: parseInt(id), ...categoryToEdit })
  
      if (categoryEdited > 0) {
        return response.status(200).json(createResponseContent(categoryEdited))
      } else {
        return response.status(404).json(createResponseErrors([ 'Category not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  delete = async (request, response) => {
    try {
      const { id } = request.params

      const categoryRemoved = await this.repository.remove(parseInt(id))
  
      if (categoryRemoved > 0) {
        return response.status(200).json(createResponseContent({ id }))
      } else {
        return response.status(404).json(createResponseErrors([ 'Category not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }
}

module.exports = CategoryController