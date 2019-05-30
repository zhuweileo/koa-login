const api = {
  async getUserIfo(ctx){
    console.log(ctx.method,'getUserIfo');
  },
  async signIn(ctx){
    console.log(ctx.method,'signIn');
  },
  async signUp(ctx){
    console.log(ctx.method,'signUp');
  },
}

module.exports = api;