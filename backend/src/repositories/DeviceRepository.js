const DeviceModel   = require('../database/models/DeviceModel')
const CategoryModel = require('../database/models/CategoryModel')

class DeviceRepository {
  async add(device) {
    try {
      return await DeviceModel.create(device)
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectAll() {
    try {
      return await DeviceModel.findAll({ include: [ { model: CategoryModel } ] })
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await DeviceModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async update(id, key, device) {
    try {
      return await DeviceModel.update(device,{where: {id:id, key:key}})
    } catch (error) {
      console.log(error.message)
    }
  }

  async remove(id, key) {
    try {
      return await DeviceModel.destroy({where: {id:id, key:key}})
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = DeviceRepository