const twitter = require('./services/twitter-api');
const markov = require('./services/markov');

async function main() {
  const tweets = await twitter.getTweets({ screenName: 'jairbolsonaro', count: '10' });

  const data = tweets.map((t) => t.text);

  const tweet = markov.generateText(data);

  console.log(tweet.string);

  // await twitter.createTweet(tweet.string);

  console.log('foi');
}


main();
