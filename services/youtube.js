const fetch       = require('node-fetch');
const Youtube    = {};

Youtube.getYoutubeResults = () => {
  return fetch(`http://hawttrends.appspot.com/api/terms/`);
};

module.exports = Youtube;
