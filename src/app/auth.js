const jwtDecode = require('jwt-decode');

export default class Auth {
	session() {
    let isLoggedIn = false;

    if(localStorage.getItem('xyzcba')){
    	var decoded = jwtDecode(localStorage.getItem('xyzcba'));
    	const expiresAt = decoded.exp*1000;
    	const current = Date.now()
    	const diff = expiresAt - current;

    	console.log('exp: ', expiresAt);
    	console.log('curr: ', current);
    	console.log('diff: ', diff);

      if(diff > 30000){
        isLoggedIn = true;
      }
    }

    return isLoggedIn;
  }
}
