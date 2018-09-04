const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if(err) return console.log(err);
    let db = client.db('mean');
    closure(db);
  });
}

//err handleing
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

//response handleing
let response = {
  status: 200,
  data: [],
  message: null
};

//get users or other fetch method
router.get('/users', (reg, res) => {
  connection((db) => {
    db.collection('users')
    .find()
    .toArray()
    .then((users) => {
      response.data = users;
      res.json(response);
    })
    .catch((err) => {
      sendError(err, res);
    });
  });
});

module.exports = router;
