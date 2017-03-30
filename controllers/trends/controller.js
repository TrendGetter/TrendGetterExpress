const Google = require('../../services/Google');



let controller = {};

controller.index = (req, res) => {
  console.log('inside index');

    .then(r => r.json())
    .then(data => {
      res.render('home/index');
    });
};

module.exports = controller;
