class Repository {
    constructor (repository) {
      this.repository = repository
    }
  
    setRepository(repository) {
      this.repository = repository
    }
  
    async add(item) {
      return await this.repository.add(item)
    }
  
    async selectAll() {
        console.log('erro aqui???')
      return await this.repository.selectAll()
    }
  
    async selectByFilter(filter) {
      return await this.repository.selectByFilter(filter)
    }
  
    async update(id, key, item) {
      return await this.repository.update(id, key, item)
    }
  
    async remove(id, key) {
      return await this.repository.remove(id, key)
    }
  }
  
  module.exports = Repository