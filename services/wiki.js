const fetch       = require('node-fetch');
const timestamp = require('time-stamp');

const Wiki    = {};
Wiki.getWikiResults = () => {
  console.log("checkpoint!");
  let month = timestamp('MM');
  let year = timestamp('YYYY');
  let day= timestamp('DD')
  console.log(month, year);
  return fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/${year}/${month}/all-days`);
  // return fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikisource/all-access/2015/09/all-days`);

};

module.exports = Wiki;
