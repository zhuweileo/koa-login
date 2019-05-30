const Router = require('koa-router')
const apiController = require('../controller/api')
const router = new Router()

router.get('/user/getuserifo',apiController.getUserIfo)
.post('/user/signin',apiController.signIn)
.post('/user/signup',apiController.signUp)

module.exports = router;