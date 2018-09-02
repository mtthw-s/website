const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();
module
//api file for interacting with mongodb
const api = require('./server/routes/api');

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlecoded({extended: false}));

//angular DIST output folder
app.use(express.static(path.join(_dirname, 'dist')));

//api location
app.use('/api', api);

//send all other requests to the angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'dist/index.html'));
});

//set port
const port = process.env.PORT || '3000';
app.set('port', port);

const server - http.createServer(app);

server.listen(port, () => console.log('running on local host:${port}'));
