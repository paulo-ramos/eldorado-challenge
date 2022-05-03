class User {
    constructor (name, email, password) {
      this._name = name
      this._email = email
      this._password = password
    }
  
    valid() {
      return true // (this._name && this._email && this._password)
    }
  }
  
  module.exports = User