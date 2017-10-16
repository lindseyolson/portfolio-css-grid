// requires
var express = require ('express');
var app = express();
var path = require ('path');
// var mongoose = require ('mongoose');

// routes
// var index = require ('./modules/routes/index');

// globals
var port = process.env.PORT || 1616;

// uses
app.use (express.static('public'));
// app.use ('/', index);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// database
// const MongoURI = process.env.MONGODB_URI || 'localhost:27017/gardenApp';
// const MongoDB = mongoose.connect(MongoURI).connection;
// MongoDB.on('error', ( err ) => {
//   console.log('mongodb connection error:', err);
// });
// MongoDB.once('open', () => {
//   console.log('mongodb connection is open');
// });

// server
app.listen (port, function(){
  console.log('server listening on port:', port);
});
