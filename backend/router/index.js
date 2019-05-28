const fs = require('fs')
const path = require('path')
const Router = require('koa-router');

const home = new Router()
home.get('/',async (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.readFileSync(path.resolve(__dirname,'../../frontend/dist/home/home.html'))
})

const page = new Router()
page.get('/',async (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.readFileSync(path.resolve(__dirname,'../../frontend/dist/home/home.html'))
})
page.get('/admin',async (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.readFileSync(path.resolve(__dirname,'../../frontend/dist/admin/admin.html'))
})

const router = new Router()
router.use('/',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())
router.get('*',async (ctx) => {
  ctx.body = '<h1>404!</h1>'
})


module.exports = router;
 