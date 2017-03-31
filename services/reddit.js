const fetch       = require('node-fetch');
const Reddit    = {};

Reddit.getRedditResults = () => {
  return fetch(`https://www.reddit.com/r/all/hot/.json?count=10`);
};

module.exports = Reddit;
