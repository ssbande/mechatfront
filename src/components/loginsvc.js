// var nocache = require('superagent-no-cache');
var request = require('superagent');
// var prefix = require('superagent-prefix')('/static');

// request
//   .post('/some-url')
//   .query({ action: 'edit', city: 'London' }) // query string
//   .use(prefix) // Prefixes *only* this request
//   .use(nocache) // Prevents caching of *only* this request
//   .end(function(err, res){
//     // Do something
//   });

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