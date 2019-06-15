const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const config = require('./config/config')

const router = require('./router')
const app = new Koa();
const staticPath = '../frontend/dist'

// session存储配置
const sessionMysqlConfig= {
  user: config.database.username,
  password: config.database.password,
  database: config.database.database,
  host: config.database.host,
}
// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))
app.use(cors())
app.use(bodyParser())
app.use(static(path.join(__dirname,staticPath)))
app.use(router.routes()).use(router.allowedMethods())

app.listen('3000');
console.log('listen to port 3000');

