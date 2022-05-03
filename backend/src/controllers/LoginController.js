const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')
const authConfig = require('../config/authentication')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/Login')

class LoginController {
  constructor(repository) {
    this.repository = repository
  }

  post = async (request, response) => {
    const { email, password } = request.body

    try {
      const user = new User(email, password)

      console.log(email)
      console.log(password)

      if (!user.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid user' ]))
      }

      const validUser = await this.repository.selectByFilter({ email })

      if (email === validUser.email && bcrypt.compareSync(password, validUser.password, 5) ) {
        const info = { email, data: Date.now().toString() }
        const token = jwt.sign(info, authConfig.secreteKey, authConfig.options)

        return response.status(200).json(createResponseContent({ token }))
      }

      return response.status(400).json(createResponseErrors(['User or password incorrects']))
    } catch (error) {
      return response.status(400).json(createResponseErrors([error.message]))
    }
  }


}

module.exports = LoginController