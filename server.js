// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = 3000;
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Global variables
var reservation = [{"name":"Dark Vader","phoneNumber":"555 555 5555","email":"evil.master@badboysclub.com","uniqueId":900},
  {"name":"Luke Skywalker","phoneNumber":"666 666 6666","email":"evil.son@badboysclub.com","uniqueId":901}];
var waitList = [{"name":"Thanos","phoneNumber":"777 777 7777","email":"snap.finger@theworst.com","uniqueId":111},
  {"name":"Red Skull","phoneNumber":"000 000 0000","email":"hugo.weaving@hydra.com","uniqueId":1234}];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "views/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "views/reserve.html"));
});

// Displays all reservations and waitlists
app.get("/reservation", function(req, res) {
  return res.json(reservation);
});

app.get("/waitList", function(req, res) {
  return res.json(waitList);
});


app.post("/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  console.log(newcharacter);
  console.log(newcharacter.name);

  res.json(newcharacter);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
