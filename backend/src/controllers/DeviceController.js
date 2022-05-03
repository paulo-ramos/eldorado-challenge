const Device = require('../models/Device')
const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')

class DeviceController {
  constructor(repository) {
    this.repository = repository
  }

  get = async (request, response) => {
    try {
      const devices = await this.repository.selectAll()
  
      return response.status(200).json(createResponseContent(devices))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  getOne = async (request, response) => {
    try {
      const { id } = request.params

      const device = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json(createResponseContent(device))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  post = async (request, response) => {
    try {
      const { name, color, partNumber, deviceId } = request.body

      const newDevice = new Device(name,color,partNumber,deviceId)

      if (!newDevice.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid device' ]))
      }

      const deviceAdded = await this.repository.add(newDevice)
  
      return response.status(200).json(createResponseContent(deviceAdded))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  put = async (request, response) => {
    try {
      const { id, key } = request.params
      const { name, color, partNumber, deviceId } = request.body

      const deviceToEdit = {
        name: name,
        color: color,
        partNumber: partNumber,
        deviceId: deviceId
      }

      if (!deviceToEdit.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid device' ]))
      }

      const deviceEdited = await this.repository.update({ id: parseInt(id), ...deviceToEdit })
  
      if (deviceEdited > 0) {
        return response.status(200).json(createResponseContent(deviceEdited))
      } else {
        return response.status(404).json(createResponseErrors([ 'Device not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  delete = async (request, response) => {
    try {
      const { id, key } = request.params

      const deviceRemoved = await this.repository.remove(parseInt(id), key)
  
      if (deviceRemoved > 0) {
        return response.status(200).json(createResponseContent({ id }))
      } else {
        return response.status(404).json(createResponseErrors([ 'Device not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }
}

module.exports = DeviceController
