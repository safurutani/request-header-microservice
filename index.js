// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  const headerInfo = {
    "ipaddress":"",
    "language":"",
    "software":""
  }
  //isolate the first part of x-forward-for which contains the ip address
  const ipSegments = req.headers["x-forwarded-for"].split("::ffff:")
  //remove extra comma
  var ip = ipSegments[0].replace(",", "");
  //store all the info in the headerInfo object to be returned
  headerInfo.ipaddress = ip;
  headerInfo.language = req.headers["accept-language"];
  headerInfo.software = req.headers["user-agent"];
  console.log(req.headers)
  res.json(headerInfo);
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
