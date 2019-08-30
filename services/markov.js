const Markov = require('markov-strings').default;

function generateText(data) {
  const markov = new Markov(data, { stateSize: 2 });
  markov.buildCorpus();

  const options = {
    maxTries: 20,
    prng: Math.random,
    filter: (result) => result.string.split(' ').length >= 5,
  };

  const result = markov.generate(options);

  return result;
}

module.exports = {
  generateText,
};
