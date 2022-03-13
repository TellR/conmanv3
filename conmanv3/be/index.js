const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const fs = require('fs');

var corsOptions = {
  origin: "http://localhost:8071"
};


app.use(cors(corsOptions));
app.set('port', (process.env.PORT || 8070));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
//app.get("/", (req, res) => {
//  res.json({ message: "Welcome to ID-Grow" });
//});
// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

// set port, listen for requests
const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


