const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3030;
const IP = process.env.IP || 'localhost';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));


app.listen(PORT, () => {
  console.log('App is listening on ', PORT);
});