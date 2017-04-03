const Youtube = require('../../services/youtube.js');

let controller = {};

controller.getYoutubeResults = (req, res) => {
  // console.log('iygihgoygiuygiuygiuy');
  Youtube
    .getYoutubeResults()
    .then(r => r.json())
    .then(data => {
      // let youtubeResult = data.items[0].snippet.title
      // console.log(youtubeResult);
      // console.log(data.items[0].snippet.title);
      res.json({
          youtubeResult1: data.items[0].snippet.title,
          youtubeResult2: data.items[1].snippet.title,
          youtubeResult3: data.items[2].snippet.title,
          youtubeResult4: data.items[3].snippet.title,
          youtubeResult5: data.items[4].snippet.title,
          youtubeResult6: data.items[5].snippet.title,
          youtubeResult7: data.items[6].snippet.title,
          youtubeResult8: data.items[7].snippet.title,
          youtubeResult9: data.items[8].snippet.title,
          youtubeResult10: data.items[9].snippet.title,
      });
    });
};
module.exports = controller;
