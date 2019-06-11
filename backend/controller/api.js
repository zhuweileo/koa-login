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
      ctx.body = validatorRes;
    } else {
      const { password, username: name, phone } = formData;
      const isExsist = await userModel.getExsistOne({ name, phone });
      console.log(isExsist,'exsist');
      if (isExsist) {
        ctx.body = isExsist
        return
      }
      const res = await userModel.create({ password, name });
      ctx.body = res;
    }
  },
}

module.exports = api;