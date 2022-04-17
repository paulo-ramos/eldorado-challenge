const DeviceRepository = require('../repositories/DeviceRepository')

class DeviceController {
  constructor() {
    this.repository = new DeviceRepository()
  }

  get = async (request, response) => {
    try {
      const devices = await this.repository.selectAll()
  
      return response.status(200).json({ devices })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  getOne = async (request, response) => {
    try {
      const { id } = request.params

      const devices = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json({ devices })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  post = async (request, response) => {
    try {
      const { name, color, partNumber, categoryId } = request.body

      const newDevice = {
        name: name,
        color: color,
        partNumber: partNumber,
        categoryId: categoryId
      }

      const deviceAdded = await this.repository.add(newDevice)
  
      return response.status(200).json({ device: deviceAdded })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  put = async (request, response) => {
    try {
      const { id, key } = request.params

      const { name, color, partNumber, categoryId } = request.body

      const putDevice = {
        name: name,
        color: color,
        partNumber: partNumber,
        categoryId: categoryId
      }

      console.log(id)
      console.log(key)
      console.log(name)

      const deviceUpdated = await this.repository.update(id, key, putDevice)

      if (deviceUpdated>0){
        return response.status(200).json({ device: deviceUpdated })
      }
      return response.status(404).json({ message: 'Device not found' })
  
      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  patch = async (request, response) => {
    try {
      const { id, key } = request.params
      const { name, color, partNumber, categoryId } = request.body

      const patchDevice = {
        name: name,
        color: color,
        partNumber: partNumber,
        categoryId: categoryId
      }

      const deviceUpdated = await this.repository.update(id, key, patchDevice)

      if (deviceUpdated>0){
        return response.status(200).json({ device: deviceUpdated })
      }
      return response.status(404).json({ message: 'Device not found' })
  
      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  delete = async (request, response) => {
    try {
      const { id, key } = request.params

      const devicesRemoved = await this.repository.delete(id, key)
  
      if (devicesRemoved > 0) {
        return response.status(200).json({ message: `Device ${id} deleted` })
      } else {
        return response.status(404).json({ message: 'Device not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

module.exports = new DeviceController()