const path = require('path')
const Koa = require('koa')
const static = require('koa-static')

const router = require('./router')

const app = new Koa();

const staticPath = '../frontend/dist'
app.use(static(path.join(__dirname,staticPath)))
app.use(router.routes()).use(router.allowedMethods())

app.listen('3000');
console.log('listen to port 3000');

