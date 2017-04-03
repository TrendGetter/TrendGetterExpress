const Wiki = require('../../services/wiki.js');

let controller = {};

controller.getWikiResults = (req, res) => {
  // console.log('iygihgoygiuygiuygiuy');
  Wiki
    .getWikiResults()
    .then(r => r.json())
    .then(data => {
      res.json({
        wikiResult1: data.items[0].articles[2].article,
        wikiResult2: data.items[0].articles[3].article,
        wikiResult3: data.items[0].articles[4].article,
        wikiResult4: data.items[0].articles[5].article,
        wikiResult5: data.items[0].articles[6].article,
        wikiResult6: data.items[0].articles[7].article,
        wikiResult7: data.items[0].articles[8].article,
        wikiResult8: data.items[0].articles[9].article,
        wikiResult9: data.items[0].articles[10].article,
        wikiResult10: data.items[0].articles[11].article
      });

    });
};
module.exports = controller;
