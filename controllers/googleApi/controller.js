const Google = require('../../services/google.js');
let controller = {};

controller.getGoogleResults = (req, res) => {
  console.log("zzzzzzzzzzz");
  Google
    .getGoogleResults()
    .then(r => r.json())
    .then(data => {
      // console.log(data[1]);
      
      let googleResult = data[1]
      console.log("highest rank:", googleResult[0], ", second rank:", googleResult[1], ", third rank:", googleResult[2]);
    });
};
module.exports = controller;
