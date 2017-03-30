const fetch       = require('node-fetch');
const Twitter    = {};

Twitter.getTwitterResults = () => {
  return fetch(`http://hawttrends.appspot.com/api/terms/`);
};

module.exports = Twitter;
