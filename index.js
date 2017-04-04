require('dotenv').config();

const express       = require('express');
const app           = express();
const cors = require('cors')
app.use(cors())

const logger        = require('morgan');
app.use(logger('dev'));

const path          = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', require('./resources'));

app.listen(process.env.PORT || 8000, () => {
  console.log('Listening on localhost:8000');
});
