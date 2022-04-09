const CategoryRoutes = require('./routes/CategoryRoutes')

const registerRoutes = (app) => {
  app.use('/category', CategoryRoutes)
}

module.exports = { registerRoutes }