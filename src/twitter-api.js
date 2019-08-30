const Twit = require('twit');

const {
  consumerKey,
  consumerSecret,
  accessToken,
  accessTokenSecret,
} = require('./private.json');

const T = new Twit({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

async function createTweet(text) {
  return new Promise((resolve, reject) => {
    T.post('statuses/update', { status: text }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = {
  createTweet,
};
