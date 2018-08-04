const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');

const PORT = process.env.PORT || 9000;
const proxy = express();

proxy.use(parser.json());
proxy.use(parser.urlencoded({extends: true}));
proxy.use(express.static(path.join(__dirname, '../client/dist')));

proxy.get('/api/top-shelf', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  request('http://localhost:3000/bundle.js', (err, response, body) => {
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      res.status(201).send(body);
    }
  })
})

proxy.get('/api/reviews', (req, res) => {
  request('http://localhost:3002/bundle.js', (err, response, body) => {
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      res.status(201).send(body);
    }
  })
})

proxy.get('/api/restaurant-data', (req, res) => {
  request('http://localhost:3005/bundle.js', (err, response, body) => {
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      res.status(201).send(body);
    }
  })
})

proxy.get('/api/also-viewed', (req, res) => {
  request('http://localhost:9001/bundle.js', (err, response, body) => {
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      console.log(body);
      res.status(201).send(body);
    }
  })
})


proxy.listen(PORT, () => {console.log('connected to port: ', PORT)});