var request = require('superagent');

export class LoginService{
  constructor(){
    this.baseApiUrl = "http://localhost:3216/api/login";
  }

  check(loginData){
    console.log('logindata: ', loginData);
    return new Promise((resolve, reject) => {
      request
        .post(this.baseApiUrl)
        .send(loginData)
        .end((err, res) => {
          if(err){
            return reject(err);
          }else{
            return resolve(res);
          }
        })
    });
  }
}