class Device {
    constructor (name,color,partNumber,deviceId) {
      this.name = name
      this.color = color
      this.partNumber = partNumber
      this.deviceId = deviceId
    }
  
    valid() {
      return !!(this.name && this.color && this.partNumber && this.deviceId)
    }
  }
  
  module.exports = Device