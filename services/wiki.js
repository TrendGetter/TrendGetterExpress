const fetch       = require('node-fetch');
var moment = require('moment');

let yesterday = moment().add(-1, 'days').format('YYYY/MM/DD');
// console.log(yesterday);

const Wiki    = {};
Wiki.getWikiResults = () => {
  console.log("checkpoint!");
  return fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/${yesterday}`);
  // return fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/2015/09/all-days`);

};

module.exports = Wiki;
