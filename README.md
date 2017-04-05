# TrendGetterExpress

backend for trend getter app

# Technologies Used

npm packages & dependancies:
"body-parser": "^1.17.1",
"cors": "^2.8.3",
"dotenv": "^4.0.0",
"ejs": "^2.5.6",
"express": "^4.15.2",
"moment": "^2.18.1",
"morgan": "^1.8.1",
"node-fetch": "^1.6.3",
"path": "^0.12.7",
"pg-promise": "^5.6.4"


# API's

google: http://hawttrends.appspot.com/api/terms/
reddit: https://www.reddit.com/r/all/hot/.json?count=10
wiki: http://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${yesterday}
youtube: https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${APP_ID}

# Function
backend sends API requests with list of items and some links for each item at specified urls for each api
