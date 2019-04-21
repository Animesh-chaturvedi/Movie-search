console.log("hello");
var express = require("express");
var app = express();
var request = require("request");
var port = 3000;
var ip = "172.16.104.78";
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("search");
});
app.get("/results", function(req, res) {
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?apikey=89be016c&s=" + query;
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      
      res.render("results", { data: data });
    }
  });
});

app.listen(port, ip, function() {
  console.log("Movie App has started!!!");
});
