var request = require('superagent');

export class CommonService {
    constructor() {
        this.baseApiUrl = "http://localhost:3216/api/getOnlineUsers";
    }

    getOnlineUsers() {
        return new Promise((resolve, reject) => {
            request
                .get(this.baseApiUrl)
                .end((err, res) => {
                    if (err) {
                        return reject(err);
                    } else {
                        return resolve(res);
                    }
                })
        });
    }
}