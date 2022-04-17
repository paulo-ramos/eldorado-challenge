const DeviceModel = require('../database/models/DeviceModel')

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
      return await DeviceModel.findAll()
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

  async delete(id, key) {
    try {
      return await DeviceModel.destroy({where: {id:id, key:key}})
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = DeviceRepository