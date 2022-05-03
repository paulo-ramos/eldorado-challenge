const Repositories = require('../repositories')

const CategoryController = require('../controllers/CategoryController')
const DeviceController   = require('../controllers/DeviceController')
const UserController     = require('../controllers/UserController')
const LoginController    = require('../controllers/LoginController')


module.exports = {
    CategoryController: new CategoryController(Repositories.CategoryRepository),
    DeviceController: new DeviceController(Repositories.DeviceRepository),
    UserController: new UserController(Repositories.UserRepository),
    LoginController: new LoginController(Repositories.LoginRepository)
}