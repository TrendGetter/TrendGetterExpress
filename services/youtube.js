const fetch       = require('node-fetch');
const Youtube    = {};

Youtube.getYoutubeResults = () => {
  return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyBpKwgs4rwLN7V_42KpgQwE3xz0NA56yRM`);
};

module.exports = Youtube;
