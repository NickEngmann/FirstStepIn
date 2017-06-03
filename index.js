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
const auth = firebase.auth();
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
app.get('/favicon.ico', (request, response) => {
  response.sendStatus(200)
    .end();
});
app.post('/signInUser', function (req, res, next) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});
// Always send the index.html
app.get('*', (request, response) => {
  response.redirect('/');
});

server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});