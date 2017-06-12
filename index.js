 "use strict";
//initialize firebase
var firebase = require("firebase");
// require('firebase/messaging');


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
var urlSheets =
{
  "ListingName":
  {
    "Food Banks":"https://docs.google.com/spreadsheets/d/18C24pEmFTz9JhIX_8UUhHEb5GenBPtrW_6WPMP_muzM/edit#gid=796165972",
    "Restaurants":"https://docs.google.com/spreadsheets/d/18C24pEmFTz9JhIX_8UUhHEb5GenBPtrW_6WPMP_muzM/edit#gid=0",
    "International Markets":"https://docs.google.com/spreadsheets/d/18C24pEmFTz9JhIX_8UUhHEb5GenBPtrW_6WPMP_muzM/edit#gid=634490059",
    "Farmers Markets":"https://docs.google.com/spreadsheets/d/18C24pEmFTz9JhIX_8UUhHEb5GenBPtrW_6WPMP_muzM/edit#gid=634490059",
    "Rent Assistance":"https://docs.google.com/spreadsheets/d/1Lv2hYUkQSsmumUKOYrXOXYKyKG2qQ0f-IWx5PbmYI1o/edit#gid=0",
    "Affordable Housing":"https://docs.google.com/spreadsheets/d/1Lv2hYUkQSsmumUKOYrXOXYKyKG2qQ0f-IWx5PbmYI1o/edit#gid=876982746",
    "Disputes":"https://docs.google.com/spreadsheets/d/1Lv2hYUkQSsmumUKOYrXOXYKyKG2qQ0f-IWx5PbmYI1o/edit#gid=884749198",
    "ESL Classes":"https://docs.google.com/spreadsheets/d/1-Mkj3ifbDBnwvbOsbG8iRyxO_Mj40pNdP28ahoZMOQA/edit#gid=0",
    "General Education":"https://docs.google.com/spreadsheets/d/1-Mkj3ifbDBnwvbOsbG8iRyxO_Mj40pNdP28ahoZMOQA/edit#gid=1712191606",
    "K-12":"https://docs.google.com/spreadsheets/d/1-Mkj3ifbDBnwvbOsbG8iRyxO_Mj40pNdP28ahoZMOQA/edit#gid=262570677",
    "Mosques And Churches": "https://docs.google.com/spreadsheets/d/1m1qsgFgL6W5XbPnKQ_ljFWMRWq7cVhe_gKN66qMvJf8/edit#gid=0",
    "Groups": "https://docs.google.com/spreadsheets/d/1m1qsgFgL6W5XbPnKQ_ljFWMRWq7cVhe_gKN66qMvJf8/edit#gid=667001242"
  }
}
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
app.get('/:listing(Food%20Banks|Restaurants|International%20Markets|Farmers%20Markets|Rent%20Assistance|Affordable%20Housing|Disputes|ESL%20Classes|General%20Education|K-12|Mosques%20And%20Churches|Groups)?', (request, response) => {
  // This is where I find the specific listing data that I want
  var name = request.params.listing; 
  console.log(name);
  var urlSpecific=urlSheets.ListingName[name];
  response.render('listing', {ListingName:name, urlSheetrock:urlSpecific});
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