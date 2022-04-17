const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {
  constructor() {
    this.repository = new CategoryRepository()
  }

  get = async (request, response) => {
    try {
      const categories = await this.repository.selectAll()
  
      return response.status(200).json({ categories })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  getOne = async (request, response) => {
    try {
      const { id } = request.params

      const categs = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json({ categs })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  post = async (request, response) => {
    try {
      const { name } = request.body

      const newCategory = {
        name
      }

      const categAdded = await this.repository.add(newCategory)
  
      return response.status(200).json({ categ: categAdded })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  put = async (request, response) => {
    try {
      const { id, key } = request.params
      const { name } = request.body

      const putCategory = {
        name
      }

      console.log(id)
      console.log(key)
      console.log(name)

      const categUpdated = await this.repository.update(id, key, putCategory)

      if (categUpdated>0){
        return response.status(200).json({ categ: categUpdated })
      }
      return response.status(404).json({ message: 'Category not found' })
  
      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  patch = async (request, response) => {
    try {
      const { id, key } = request.params
      const { name } = request.body

      const patchCategory = {
        name
      }

      const categUpdated = await this.repository.update(id, key, patchCategory)

      if (categUpdated>0){
        return response.status(200).json({ categ: categUpdated })
      }
      return response.status(404).json({ message: 'Category not found' })
  
      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  delete = async (request, response) => {
    try {
      const { id, key } = request.params

      const categsRemoved = await this.repository.delete(id, key)
  
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