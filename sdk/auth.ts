import Taro from "@tarojs/taro";

class Auth {

  constructor () {

  }

  // post({
  //   uri: 'user/wxapp/login',
  //   data: {
  //     code:res.code
  //   },
  //   contentType: 'form'
  // })
  // .then(response => {
  //   resolve(response.data.token)
  // })

  /** { "errMsg": "login:ok", "code": "061gmyts1pT2nl05N1qs1fqAts1gmyt1" }*/
  login () {
    return Taro.login();
  }
}

export const auth = new Auth();