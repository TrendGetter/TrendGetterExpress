const Google = require('../../services/google.js');
let controller = {};

controller.getGoogleResults = (req, res) => {
  console.log("zzzzzzzzzzz");
  Google
    .getGoogleResults()
    .then(r => r.json())
    .then(data => {
      // console.log(data[1]);
      // let googleResult = data[1]
      // console.log("highest rank:", googleResult[0], ", second rank:", googleResult[1], ", third rank:", googleResult[2]);
      res.json({
          googleResult1: data['1'][0],
          googleResult2: data['1'][1],
          googleResult3: data['1'][2],
          googleResult4: data['1'][3],
          googleResult5: data['1'][4],
          googleResult6: data['1'][5],
          googleResult7: data['1'][6],
          googleResult8: data['1'][7],
          googleResult9: data['1'][8],
          googleResult10: data['1'][9],
      });
    });
};

module.exports = controller;
