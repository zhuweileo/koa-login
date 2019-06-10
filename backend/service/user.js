const user = {

  /**
   * userName
   * email
   * phone
   * password
   * confirmPassword
   */
  signUpValidator(formData){
    const {username,email,password,confirm,phone} = formData;
    const result = {
      success: false,
      message: '',
    }
    console.log(formData);
    if(!/\w{6,12}/.test(username)){
      result.message = '用户名必须是6-12位的英文字母、数字、下划线组合'
    }
    // if(!/\w{1,}@\w{1,}/.test(email)){
    //   result.message = '邮箱格式不正确'
    // }
    if(!/\d{11}/.test(phone)){
      result.message = '手机号码必须是11位数字'
    }
    if(!/\w{6,12}/.test(password)){
      result.message = '密码必须是6-12位的英文字母、数字、下划线组合'
    }
    if(password !== confirm){
      result.message = '两次填写的密码不一致'
    }
    result.success = true;
    result.message = '注册成功';
    return result
  }
}

module.exports = user