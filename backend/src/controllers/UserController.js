const UserRepository = require('../repositories/UserRepository')

class UserController {
  constructor() {
    this.repository = new UserRepository()
  }

  get = async (request, response) => {
    try {
      const users = await this.repository.selectAll()
  
      return response.status(200).json({ users })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  getOne = async (request, response) => {
    try {
      const { email } = request.params

      const users = await this.repository.selectByFilter({ email: email })
  
      return response.status(200).json({ users })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  post = async (request, response) => {
    try {
      const { name, email, password } = request.body

      const newUser = {
        name: name,
        email: email,
        password: password
      }

      const userAdded = await this.repository.add(newUser)
  
      return response.status(200).json({ user: userAdded })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  put = async (request, response) => {
    try {
      const { id, key } = request.params
      const { name, email, password } = request.body

      const putUser = {
        name: name,
        email: email,
        password: password
      }

      const userUpdated = await this.repository.update(id, key, putUser)

      if (userUpdated>0){
        return response.status(200).json({ user: userUpdated })
      }
      return response.status(404).json({ message: 'User not found' })
  
      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  patch = async (request, response) => {
    try {
      const { id, key } = request.params
      const { name, email, password } = request.body

      const patchUser = {
        name: name,
        email: email,
        password: password
      }

      const userUpdated = await this.repository.update(id, key, patchUser)

      if (userUpdated>0){
        return response.status(200).json({ user: userUpdated })
      }
      return response.status(404).json({ message: 'User not found' })
  
      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  delete = async (request, response) => {
    try {
      const { id, key } = request.params

      const usersRemoved = await this.repository.delete(id, key)
  
      if (usersRemoved > 0) {
        return response.status(200).json({ message: `User ${id} deleted` })
      } else {
        return response.status(404).json({ message: 'User not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

module.exports = new UserController()