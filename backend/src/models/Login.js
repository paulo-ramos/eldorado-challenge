class Login {
    constructor (email, password) {
      this._email = email
      this._password = password
    }
  
    valid() {
      return (this._email && this._password)
    }
  }
  
  module.exports = Login