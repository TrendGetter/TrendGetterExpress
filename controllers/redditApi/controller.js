const Reddit = require('../../services/reddit.js');

let controller = {};


controller.getRedditResults = (req, res) => {
  // console.log('iygihgoygiuygiuygiuy');
  Reddit
    .getRedditResults()
    .then(r => r.json())
    .then(data => {

      let redditResult = data.data.children[0].data.title

      console.log(redditResult);
    });
};
module.exports = controller;
