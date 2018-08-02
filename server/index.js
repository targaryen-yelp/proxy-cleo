const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
// const router = require('./router.js');

const PORT = process.env.PORT || 9000;
const proxy = express();

proxy.use(parser.json());
proxy.use(parser.urlencoded({extends: true}));

proxy.use(express.static(path.join(__dirname, '../client/dist')));
// proxy.use('/api', router);

proxy.get('/api/top-shelf', (res, req) => {
  request('http://localhost:9001/bundle.js', (err, res, body) => {
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      res.status(201).send(body);
    }
  })
})

proxy.get('/api/reviews', (res, req) => {
  request('http://localhost:9001/bundle.js', (err, res, body) => {
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      res.status(201).send(body);
    }
  })
})

proxy.get('/api/restaurant-data', (res, req) => {
  request('http://localhost:9001/bundle.js', (err, res, body) => {
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      res.status(201).send(body);
    }
  })
})

proxy.get('/api/also-viewed', (req, res) => {
  request('http://localhost:9001/bundle.js', (err, response, body) => {
    res.header("Access-Control-Allow-Origin", "*");
    if (err) {
      console.log('error posting request to Top Shelf api: ', err);
    } else {
      console.log(body);
      res.status(200).send(body);
    }
  })
})


proxy.listen(PORT, () => {console.log('connected to port: ', PORT)});