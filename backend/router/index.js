const fs = require('fs')
const path = require('path')
const Router = require('koa-router');
const api = require('./api')

const home = new Router()
home.get('/', async (ctx) => {
  if (ctx.session && ctx.session.isLogin) {
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../../frontend/dist/home/home.html'))
  } else {
    ctx.redirect('/page/admin')
  }
})

const page = new Router()
page.get('/', async (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.readFileSync(path.resolve(__dirname, '../../frontend/dist/home/home.html'))
})
page.get('/admin', async (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.readFileSync(path.resolve(__dirname, '../../frontend/dist/admin/admin.html'))
})

const router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.get('*', async (ctx) => {
  ctx.body = '<h1>404!</h1>'
})


module.exports = router;
