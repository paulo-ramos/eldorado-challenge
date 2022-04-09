const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {
  constructor() {
    this.repository = new CategoryRepository()
  }

  async get(request, response) {
    try {
      const categories = await this.repository.selectAll()
  
      return response.status(200).json({ categories })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  async getOne(request, response) {
    try {
      const { id } = request.params

      const categs = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json({ categs })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  async post(request, response) {
    try {
      const { key, name } = request.body

      const newCategory = {
        key,
        name
      }

      const categAdded = await this.repository.add(newCategory)
  
      return response.status(200).json({ categ: categAdded })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params
      const { key, name } = request.body

      const categToEdit = {
        id: parseInt(id),
        key,
        name
      }

      const categsEdited = await this.repository.update(categToEdit)
  
      if (categsEdited > 0) {
        return response.status(200).json({ message: `Category ${id} edited`, categ: categsEdited })
      } else {
        return response.status(404).json({ message: 'Category not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params

      const categsRemoved = await this.repository.remove(parseInt(id))
  
      if (categsRemoved > 0) {
        return response.status(200).json({ message: `Category ${id} deleted` })
      } else {
        return response.status(404).json({ message: 'Category not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

module.exports = new CategoryController()