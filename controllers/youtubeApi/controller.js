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
      //  data.items[0].id
      // https://www.youtube.com/watch?v=id
      res.json({
          youtubeResult1: data.items[0].snippet.title,
          youtubeId1: data.items[0].id,

          youtubeResult2: data.items[1].snippet.title,
          youtubeId2: data.items[1].id,

          youtubeResult3: data.items[2].snippet.title,
          youtubeId3: data.items[2].id,

          youtubeResult4: data.items[3].snippet.title,
          youtubeId4: data.items[3].id,

          youtubeResult5: data.items[4].snippet.title,
          youtubeId5: data.items[4].id,

          youtubeResult6: data.items[5].snippet.title,
          youtubeId6: data.items[5].id,

          youtubeResult7: data.items[6].snippet.title,
          youtubeId7: data.items[6].id,

          youtubeResult8: data.items[7].snippet.title,
          youtubeId8: data.items[7].id,

          youtubeResult9: data.items[8].snippet.title,
          youtubeId9: data.items[8].id,

          youtubeResult10: data.items[9].snippet.title,
          youtubeId10: data.items[9].id,
      });
    });
};
module.exports = controller;
