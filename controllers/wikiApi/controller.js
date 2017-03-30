const Wiki = require('../../services/wiki.js');

let controller = {};

controller.getWikiResults = (req, res) => {
  console.log('iygihgoygiuygiuygiuy');
  Wiki
    .getWikiResults()
    .then(r => r.json())
    .then(data => {
      console.log(data)
      // ignore first two results, they are the main page and search page

      let wikiResult3 = data.items[0].articles[2].article
      let wikiResult4 = data.items[0].articles[3].article
      let wikiResult5 = data.items[0].articles[4].article
      let wikiResult6 = data.items[0].articles[5].article
      let wikiResult7 = data.items[0].articles[6].article
      let wikiResult8 = data.items[0].articles[7].article
      let wikiResult9 = data.items[0].articles[8].article
      let wikiResult10 = data.items[0].articles[9].article
      let wikiResult11 = data.items[0].articles[10].article
      let wikiResult12 = data.items[0].articles[11].article

      console.log(wikiResult3,"/", wikiResult4,"/", wikiResult5,"/", wikiResult6,"/", wikiResult7,"/", wikiResult8,"/", wikiResult9,"/", wikiResult10,"/", wikiResult11,"/", wikiResult12);
    });
};
module.exports = controller;
