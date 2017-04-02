const fetch       = require('node-fetch');
const Youtube    = {};
const APP_ID      = process.env.APP_ID;

Youtube.getYoutubeResults = () => {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${APP_ID}`);
};

module.exports = Youtube;
