const userService = require('../service/user')
const userModel = require('../model/user')
const api = {
  async getUserIfo(ctx) {
    console.log(ctx.method, 'getUserIfo');
    const {userid} = ctx.session;
    console.log(userid);
    const userInfo = await userModel.getUserInfo({id:userid});
    console.log(userInfo);
    if(userInfo) {
      ctx.body = {
        status: 0,
        msg: '获取成功',
        data:{
          name: userInfo.name,
          password: userInfo.password,
        }
      }
    } else {
      ctx.body = {
        status: 0,
        msg: '获取失败',
        data: {}
      }
    }
  },
  async signIn(ctx) {
    console.log(ctx.method, 'signIn');
    console.log(ctx.request.body);
    const {username,password} = ctx.request.body;
    const loginRes = await userModel.getOneByNameAndPassword({name: username,password})
    if(loginRes) {
      ctx.session.isLogin = true;
      ctx.session.username = loginRes.name;
      ctx.session.userid = loginRes.id;
      ctx.body = {
        status: 0,
        msg: '登录成功',
        data: {
          redirect: true,
          redirectUrl: '//localhost:3000/'
        }
      }
    } else {
      ctx.body = {
        status: 1,
        msg: '登录失败',
      }
    }
  },
  async signUp(ctx) {
    console.log(ctx.method, 'signUp');
    const formData = ctx.request.body
    const validatorRes = userService.signUpValidator(formData);
    if (!validatorRes.success) {
      ctx.body = {status: 2, msg: validatorRes.msg};
    } else {
      const { password, username: name, phone } = formData;
      const isExsist = await userModel.getExsistOne({ name, phone });
      // console.log(isExsist,'exsist');
      if (isExsist) {
        ctx.body = {status: 1, msg: '用户已存在'}
      } else {
        const res = await userModel.create({ 
          password, 
          name, 
          create_time: new Date().getTime()
        });
        ctx.body = {status: 0, msg: '注册成功' ,data: {name}};
      }
    }
  },
}

module.exports = api;