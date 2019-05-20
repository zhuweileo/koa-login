const Koa = require('koa')
const router = require('./router')

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods())

app.listen('3000');
console.log('listen to port 3000');

