const User = require('../models/User')
const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')

class UserController {
  constructor(repository) {
    this.repository = repository
  }

  get = async (request, response) => {
    try {
      const users = await this.repository.selectAll()
  
      return response.status(200).json(createResponseContent(users))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  getOne = async (request, response) => {
    try {
      const { id } = request.params

      const user = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json(createResponseContent(user))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  post = async (request, response) => {
    try {
      const { name } = request.body

      const newUser = new User(name)

      if (!newUser.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid user' ]))
      }

      const userAdded = await this.repository.add(newUser)
  
      return response.status(200).json(createResponseContent(userAdded))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  put = async (request, response) => {
    try {
      const { id } = request.params
      const { name } = request.body

      const userToEdit = new User(name)

      if (!userToEdit.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid user' ]))
      }

      const userEdited = await this.repository.update({ id: parseInt(id), ...userToEdit })
  
      if (userEdited > 0) {
        return response.status(200).json(createResponseContent(userEdited))
      } else {
        return response.status(404).json(createResponseErrors([ 'User not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  delete = async (request, response) => {
    try {
      const { id } = request.params

      const userRemoved = await this.repository.remove(parseInt(id))
  
      if (userRemoved > 0) {
        return response.status(200).json(createResponseContent({ id }))
      } else {
        return response.status(404).json(createResponseErrors([ 'User not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }
}

module.exports = UserController





// const authentication = require('../config/authentication')
// const UserRepository = require('../repositories/UserRepository')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const UserModel = require('../models/User')
// const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')

// class UserController {
//   constructor(repository) {
//     this.repository = repository
//   }

//   get = async (request, response) => {
//     try {
//       const users = await this.repository.selectAll()
  
//       return response.status(200).json({ users })
//     } catch (error) {
//       return response.status(400).json({ error: error.message })
//     }
//   }

//   getOne = async (request, response) => {
//     try {
//       const { email } = request.params

//       const users = await this.repository.selectByFilter({ email: email })
  
//       return response.status(200).json({ users })
//     } catch (error) {
//       return response.status(400).json({ error: error.message })
//     }
//   }

//   post = async (request, response) => {
//     try {
//       const { name, email, password } = request.body

//       const newUser = {
//         name: name,
//         email: email,
//         password:  bcrypt.hashSync(password, 5)
//       }

//       const userAdded = await this.repository.add(newUser)
  
//       return response.status(200).json({ user: userAdded })
//     } catch (error) {
//       return response.status(400).json({ error: error.message })
//     }
//   }

//  put = async (request, response) => {
//     try {
//       const { id, key } = request.params
//       const { name, email, password } = request.body

//       const putUser = {
//         name: name,
//         email: email,
//         password:  bcrypt.hashSync(password, 5)
//       }

//       const userUpdated = await this.repository.update(id, key, putUser)

//       if (userUpdated>0){
//         return response.status(200).json({ user: userUpdated })
//       }
//       return response.status(404).json({ message: 'User not found' })
  
      
//     } catch (error) {
//       return response.status(400).json({ error: error.message })
//     }
//   }

//   patch = async (request, response) => {
//     try {
//       const { id, key } = request.params
//       const { name, email, password } = request.body

//       const patchUser = {
//         name: name,
//         email: email,
//         password:  bcrypt.hashSync(password, 5)
//       }

//       const userUpdated = await this.repository.update(id, key, patchUser)

//       if (userUpdated>0){
//         return response.status(200).json({ user: userUpdated })
//       }
//       return response.status(404).json({ message: 'User not found' })
  
      
//     } catch (error) {
//       return response.status(400).json({ error: error.message })
//     }
//   }

//   delete = async (request, response) => {
//     try {
//       const { id, key } = request.params

//       const usersRemoved = await this.repository.delete(id, key)
  
//       if (usersRemoved > 0) {
//         return response.status(200).json({ message: `User ${id} deleted` })
//       } else {
//         return response.status(404).json({ message: 'User not found' })
//       }
//     } catch (error) {
//       return response.status(400).json({ error: error.message })
//     }
//   }

//   login = async (request, response) => {
//       const { email, password } = request.body

//       console.log('cheguei')

//       try {
//         const user = new User(email, password)
  
//         if (!user.valid()) {
//           return response.status(400).json(createResponseErrors([ 'Invalid user' ]))
//         }
  
//         const encryptedPassword = await bcrypt.hash(password, 10)


//         const validUser = await this.repository.selectByFilter({ 
//           email, 
//           password: encryptedPassword 
//         })
  
//         if (validUser) {
//           const info = { email, data: Date.now().toString() }
//           const token = jwt.sign(info, authConfig.secreteKey, authConfig.options)
  
//           return response.status(200).json(createResponseContent({ token }))
//         }
  
//         return response.status(400).json(createResponseErrors(['Invalid Login/password']))
//     } catch (error) {
//         return response.status(400).json(createResponseErrors([error.message]))
//     }
//   }
 
// }

// module.exports = new UserController()