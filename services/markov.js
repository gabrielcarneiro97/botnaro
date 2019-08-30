const Markov = require('markov-strings').default;


function checkEnd({ string }) {
  return !string.endsWith('...')
  && string.endsWith('.');
}

function checkLegth({ string }) {
  return string.split(' ').length >= 5
  && string.length <= 255;
}

function checkData({ string }) {
  return !string.includes('http');
}

function generateText(data) {
  const markov = new Markov(data, { stateSize: 2 });
  markov.buildCorpus();

  const options = {
    maxTries: 2000,
    prng: Math.random,
    filter: (result) => checkLegth(result) && checkEnd(result) && checkData(result),
  };

  const result = markov.generate(options);

  return result;
}

module.exports = {
  generateText,
};
