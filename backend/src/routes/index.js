const CategoryRoutes = require('./CategoryRoutes')
const DeviceRoutes = require('./DeviceRoutes')
const UserRoutes = require('./UserRoutes')
const LoginRoutes = require('./LoginRoutes')


module.exports = [
  { name: '/category', router: CategoryRoutes },
  { name: '/device', router: DeviceRoutes },
  { name: '/user', router: UserRoutes },
  { name: '/login', router: LoginRoutes }
]

