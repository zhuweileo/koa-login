const Router = require('koa-router');

const home = new Router()
home.get('/',async (ctx) => {
  ctx.body = 'home';
})

const page = new Router()
page.get('/',async (ctx) => {
  ctx.body = 'page'
})
page.get('/signup',async (ctx) => {
  ctx.body = 'signup';
})
page.get('/signin',async (ctx) => {
  ctx.body = 'signin';
})

const router = new Router()
router.use('/',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())
router.get('*',async (ctx) => {
  ctx.body = '<h1>404!</h1>'
})

module.exports = router;
 