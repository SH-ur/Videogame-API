const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
//const cors = require('cors');
require('./db.js');

const server = express();

server.name = 'API';
//server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
//server.use(cors());
server.use((req, res, next) => {
  //lo cambié de 3000 a 3001 para que coincida
  
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Origin', 'https://vercel.com/sh-urs-projects/videogame-app/B8T8EKeYQyNf4uzpbjiXQrPd3gfP'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Origin', 'https://videogames-api-bk15.onrender.com/'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Origin', 'https://videogame-app-nu.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
