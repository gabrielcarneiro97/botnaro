const axios = require('axios');

class Twill {
  constructor({
    consumerKey,
    consumerSecret,
    accessToken,
    accessKey,
  }) {
    this.consumerKey = consumerKey;
    this.consumerSecret = consumerSecret;
    this.accessToken = accessToken;
    this.accessKey = accessKey;
  }

  async bearer() {
    const { consumerKey, consumerSecret } = this;

    const bearer = await axios.get();
  }
}


module.exports = Twill;
