const twitter = require('./services/twitter-api');
const markov = require('./services/markov');

async function main() {
  const tweets = await twitter.getTweets({ screenName: 'jairbolsonaro', count: '10' });

  const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;

  const data = tweets.map((t) => t.text.replace(urlRegex, ''));

  console.log(data);

  const tweet = markov.generateText(data);

  console.log(tweet.string);

  // await twitter.createTweet(tweet.string);

  console.log('foi');
}


main();
