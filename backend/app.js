const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongodb');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const defaultUri = 'https://api.covid19api.com/';
const summaryUri = 'https://api.covid19api.com/summary';
const countriesUri = 'https://api.covid19api.com/countries';

const uri = process.env.ATLAS_URI;
mongoose.connect((err) => {
  const collection = client.db('coviddb').collection('users');
  // perform actions on the collection object
  app.use('/users', usersRouter);
  client.close();
});

app.use('/exercises', exercisesRouter);
app.use('/movies', moviesRouter);

let data = {};
axios
  .get(summaryUri)
  .then((response) => {
    data = response.data;
  })
  .catch((error) => {
    console.log(error);
  });
app.get('/', (req, res) => res.send(data));
app.listen(port, () => {
  console.log('Server is running on port: ', port);
});
