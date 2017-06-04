 "use strict";
//initialize firebase
var firebase = require("firebase");
//require('firebase/messaging');

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
// const auth = firebase.auth();
const port = process.env.PORT || 3000;
var provider = new firebase.auth.GoogleAuthProvider();
// Set view engine to EJS and locate views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Set up static files directory
app.use('/public', express.static(path.join(__dirname, 'client/public')));

app.get('/', (request, response) => {
  response.render('index');
});
app.get('/signin', (request, response) => {
  response.render('signin'); 
});
app.get('/food', (request, response) => {
  response.render('food'); 
});
app.get('/housing', (request, response) => {
  response.render('housing'); 
});
app.get('/transportation', (request, response) => {
  response.render('transportation'); 
});
app.get('/employment', (request, response) => {
  response.render('employment'); 
});
app.get('/education', (request, response) => {
  response.render('education'); 
});
app.get('/healthcare', (request, response) => {
  response.render('healthcare'); 
});
app.get('/community', (request, response) => {
  response.render('community'); 
});
app.get('/children', (request, response) => {
  response.render('children'); 
});
app.get('/legal', (request, response) => {
  response.render('legal'); 
});
app.get('/for-volunteers', (request, response) => {
  response.render('for-volunteers'); 
});
app.get('/help', (request, response) => {
  response.render('help'); 
});
app.get('/account', (request, response) => {
  response.render('account'); 
});
app.get('/favicon.ico', (request, response) => {
  response.sendStatus(200)
    .end();
});


app.post('/signInUser', function (req, res, next) {

});
// Always send the index.html
app.get('*', (request, response) => {
  response.redirect('/');
});

server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});