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

function extractTweet(tweet) {
  return {
    text: tweet.text,
    date: new Date(tweet.created_at),
    id: tweet.id,
  };
}

async function createTweet(text) {
  return T.post('statuses/update', { status: text });
}

async function getTweets({
  screenName,
  sinceId,
  count,
  maxId,
}) {
  try {
    const { data } = await T.get('statuses/user_timeline', {
      screen_name: screenName,
      since_id: sinceId,
      max_id: maxId,
      count,
    });

    return data.map(extractTweet);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createTweet,
  getTweets,
};
