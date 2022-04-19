const auth = require('./middlewares/auth')
const CategoryRoutes = require('./routes/CategoryRoutes')
const DeviceRoutes = require('./routes/DeviceRoutes')
const UserRoutes = require('./routes/UserRoutes')

const registerRoutes = (app) => {
  app.use('/category', auth, CategoryRoutes),
  app.use('/device', auth,DeviceRoutes),
  app.use('/user', UserRoutes)
}

module.exports = { registerRoutes }