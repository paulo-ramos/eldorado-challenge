const CategoryRoutes = require('./routes/CategoryRoutes')
const DeviceRoutes = require('./routes/DeviceRoutes')

const registerRoutes = (app) => {
  app.use('/category', CategoryRoutes),
  app.use('/device', DeviceRoutes)
}

module.exports = { registerRoutes }