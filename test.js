const fs = require('fs');

const Markov = require('markov-strings').default;

const data = fs.readFileSync('./tweets_moc.txt', 'utf8').replace(/\r/g, '').split('\n');

const markov = new Markov(data, { stateSize: 2 });
markov.buildCorpus();

const options = {
  maxTries: 20, // Give up if I don't have a sentence after 20 tries (default is 10)
  prng: Math.random, // An external Pseudo Random Number Generator if you want to get seeded results
  filter: (result) => result.string.split(' ').length >= 5,
};

const result = markov.generate(options);
console.log(result.string);
