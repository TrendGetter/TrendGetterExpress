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
          redditResult2: data.data.children[1].data.title,
          redditResult3: data.data.children[2].data.title,
          redditResult4: data.data.children[3].data.title,
          redditResult5: data.data.children[4].data.title,
          redditResult6: data.data.children[5].data.title,
          redditResult7: data.data.children[6].data.title,
          redditResult8: data.data.children[7].data.title,
          redditResult9: data.data.children[8].data.title,
          redditResult10: data.data.children[9].data.title,
      });

    });
};
module.exports = controller;
