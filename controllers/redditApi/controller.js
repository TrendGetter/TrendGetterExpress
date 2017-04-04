const Reddit = require('../../services/reddit.js');

let controller = {};


controller.getRedditResults = (req, res) => {
  // console.log('iygihgoygiuygiuygiuy');
  Reddit
    .getRedditResults()
    .then(r => r.json())
    .then(data => {
      // let redditResult = data.data.children[0].data.title
      // console.log(redditResult);
      res.json({
          redditResult1: data.data.children[0].data.title,
          redditLink1: data.data.children[0].data.permalink,

          redditResult2: data.data.children[1].data.title,
          redditLink2: data.data.children[1].data.permalink,

          redditResult3: data.data.children[2].data.title,
          redditLink3: data.data.children[2].data.permalink,

          redditResult4: data.data.children[3].data.title,
          redditLink4: data.data.children[3].data.permalink,

          redditResult5: data.data.children[4].data.title,
          redditLink5: data.data.children[4].data.permalink,

          redditResult6: data.data.children[5].data.title,
          redditLink6: data.data.children[5].data.permalink,

          redditResult7: data.data.children[6].data.title,
          redditLink7: data.data.children[6].data.permalink,

          redditResult8: data.data.children[7].data.title,
          redditLink8: data.data.children[7].data.permalink,

          redditResult9: data.data.children[8].data.title,
          redditLink9: data.data.children[8].data.permalink,

          redditResult10: data.data.children[9].data.title,
          redditLink10: data.data.children[9].data.permalink,
      });

    });
};
module.exports = controller;
