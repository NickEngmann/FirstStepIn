# FirstStepIn

First Step In is a website to help new immigrants get set up in : Austin Texas.

[![Landing](https://github.com/NickEngmann/FirstStepIn/blob/master/imgs/firststepinlanding.png)]


# How To Install First Step In to Run on Localhost 
1) Clone/Download This Repo </br>
2) Install <a href="https://nodejs.org/en/">Node JS</a> </br>
3) Open up a Terminal </br>
4) Go to the downloaded repo
```
cd /FirstStepin 
```  
5) Install npm related packages
``` 
npm install 
```
6) Start the server
```
npm start 
```
7) Open up a web browser and go to <a href="http://localhost:3000"> http://localhost:3000 </a>

# Technical Documentation 
</br>
FirstStepIn is a dynamic site that uses Express for routing and utlizes React to serve some of dynamic content. We also utilize [Sheetrock](https://github.com/chriszarate/sheetrock) for easy database access to update website content without need of a technical systems administrator. FirstStepIn also utilizes Firebase for Google/Facebook/Twitter authentification.

## Sheetrock
For a thorough explaination of what Sheetrock is, please check out the official documentation <a href="https://chriszarate.github.io/sheetrock/"> here </a>. We use Sheetrock as our primary method to load in the information served on different pages. This is done by providing a google sheets Url to where the specific information is located.
[![Google Sheets](https://github.com/NickEngmann/FirstStepIn/blob/master/imgs/googlesheets.png)]

And then on a templating page we take that URL that we recieve through routing and dynamically create content based off contents of the google sheets
[![Sheetrock](https://github.com/NickEngmann/FirstStepIn/blob/master/imgs/sheetrock.png)]

## Routing
We use express for basic routing. This only gets a bit more difficult with the usage of sheetrock. In order to serve the correct URL/data to a page type you have to specify which links are routed where.

[![Routing](https://github.com/NickEngmann/FirstStepIn/blob/master/imgs/routing.png)]

If I have a page which I want formatted in the listings.ejs format, I would include its URL in the ListingNames object, and add it to the app.get(/:listing) string.

## Firebase/User Authentification
Firebase is currently used for Twitter/Google/Facebook/Mail authentification. 
To obtain access to the firebase database please e-mail me at <a href="cyengmann@gmail.com"> cyengmann@gmail.com </a>

[![Landing](https://github.com/NickEngmann/FirstStepIn/blob/master/imgs/firebase.png)]

# Copyright and Licensing
The MIT License

Copyright (c) 2004-2017 Quod Certamine

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
