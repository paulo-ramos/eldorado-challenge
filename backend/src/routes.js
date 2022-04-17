const CategoryRoutes = require('./routes/CategoryRoutes')
const DeviceRoutes = require('./routes/DeviceRoutes')
const UserRoutes = require('./routes/UserRoutes')

const registerRoutes = (app) => {
  app.use('/category', CategoryRoutes),
  app.use('/device', DeviceRoutes),
  app.use('/user', UserRoutes)
}

module.exports = { registerRoutes }