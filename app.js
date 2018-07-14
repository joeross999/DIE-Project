var main = require('./main.js')

var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({origin: 'null'}));

app.get('/init', function(req, res){
  result = main.init();
  res.json({"bots": result.bots.map(bot => {return {'pos': bot.position, 'color': bot.color}}), "world": result.world});
});


app.get('/refresh', function(req, res){
  res.json(main.frame().map(bot => {return {'pos': bot.position, 'color': bot.color}}));
  // res.json(main.frame());
});

app.get('/test', function(req, res){
  res.json(main.test());
});



app.listen(3000);
console.log("Now listening on port 3000");