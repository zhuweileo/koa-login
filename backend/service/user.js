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
      msg: '',
    }
    // console.log(formData);
    if(!/\w{6,12}/.test(username)){
      result.msg = '用户名必须是6-12位的英文字母、数字、下划线组合'
    }
    // if(!/\w{1,}@\w{1,}/.test(email)){
    //   result.msg = '邮箱格式不正确'
    // }
    else if(!/\d{11}/.test(phone)){
      result.msg = '手机号码必须是11位数字'
    }
    else if(!/\w{6,12}/.test(password)){
      result.msg = '密码必须是6-12位的英文字母、数字、下划线组合'
    }
    else if(password !== confirm){
      result.msg = '两次填写的密码不一致'
    } else {
      result.success = true;
      result.msg = '注册成功';
    }
    return result
  }
}

module.exports = user