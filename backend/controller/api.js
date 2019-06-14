const userService = require('../service/user')
const userModel = require('../model/user')
const api = {
  async getUserIfo(ctx) {
    console.log(ctx.method, 'getUserIfo');
  },
  async signIn(ctx) {
    console.log(ctx.method, 'signIn');
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