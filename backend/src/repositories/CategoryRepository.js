const { tratarErro } = require('../utils/logUtils')

const Category = require('../models/Category')
const database = require('../config/Database')

class CategoryRepository {
    
    async save(item) {
        let connection
        
        try {
            if (item instanceof Category) {
                const category = await Category.create(item)
            }
        } catch(error) {
            console.log('Erro ao salvar a categoria', error.message)
        } finally {
            connection.end()
        }
    }
    
    async getAll() {
        let connection
        
        try {
            const result = await Category.findAll()
            return [...result]
        } catch (error) {
            console.log('Erro ao listar categorias', error.message)
        } finally {
            connection.end()
        }
    }
    
}

module.exports = CategoryRepository