const Youtube = require('../../services/youtube.js');

let controller = {};

controller.getYoutubeResults = (req, res) => {
  // console.log('iygihgoygiuygiuygiuy');
  Youtube
    .getYoutubeResults()
    .then(r => r.json())
    .then(data => {
      // console.log(data);
      let youtubeResult = data.items[0].snippet.title

      console.log(youtubeResult);
    });
};
module.exports = controller;
