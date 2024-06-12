const express = require('express');
require('dotenv').config();
const axios = require('axios');

const router = express.Router();
const API_KEY = process.env.NASA_API_KEY;

router.get('/', (req, res) => {
  const endpointURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  // GET request to the nasa.gov API
  axios
    .get(endpointURL)
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log('Error in GET /api/apod', err);
      res.sendStatus(500);
    });
});

module.exports = router;
