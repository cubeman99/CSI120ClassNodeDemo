var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.json({
    "name" : "David Jordan",
    "vacation" : {
      "places": ["45.64, -73.63","40.760, -73.973","32.750, -117.07"]
    }
  });
});

var port = process.env.PORT || 5000;
app.listen(port);
