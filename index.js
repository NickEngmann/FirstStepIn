 "use strict";
//initialize firebase
var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyCZ6rmPq93DjrPafTaWayIq-adXR2QtLlg",
  authDomain: "firststepin-1bd8e.firebaseapp.com",
  databaseURL: "https://firststepin-1bd8e.firebaseio.com",
  projectId: "firststepin-1bd8e",
  storageBucket: "firststepin-1bd8e.appspot.com",
  messagingSenderId: "193627833378"
};

firebase.initializeApp(config);

const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = process.env.PORT || 3000;

// Set view engine to EJS and locate views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Set up static files directory
app.use('/public', express.static(path.join(__dirname, 'client/public')));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/favicon.ico', (request, response) => {
  response.sendStatus(200)
    .end();
});

// Always send the index.html
app.get('*', (request, response) => {
  response.redirect('/');
});


server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});


