const Router = require('koa-router')
const apiController = require('../controller/api')

const router = new Router()

router.get('/getuserifo',apiController.getUserIfo)
.post('/signin',apiController.signIn)
.post('/signup',apiController.signUp)

module.exports = router
