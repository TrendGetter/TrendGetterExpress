const fetch       = require('node-fetch');
const Google    = {};

Google.getGoogleResults = () => {
  return fetch(`http://hawttrends.appspot.com/api/terms/`);
};

module.exports = Google;
