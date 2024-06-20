const express = require('express');
require('dotenv').config();
const axios = require('axios');

const router = express.Router();
const BEARER_TOKEN = process.env.TIGO_BEARER_TOKEN;

router.get('/inverters/list', (req, res) => {
  const endpointURL = `https://api2.tigoenergy.com/api/v3/inverters/list`;
  const params = {
    system_id: 117937,
  };

  const headers = {
    Authorization: `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json',
  };

  // GET request to the Tigo Rest API v3 for Inverter Data
  axios
    .get(endpointURL, { params, headers })
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log('Error in GET /api/tigo', err);
      res.sendStatus(500);
    });
});

module.exports = router;
