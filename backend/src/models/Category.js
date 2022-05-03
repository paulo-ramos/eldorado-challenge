class Category {
    constructor (name) {
      this.name = name
    }
  
    valid() {
      return !!(this.name)
    }
  }
  
  module.exports = Category