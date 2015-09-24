var express = require('express');
var app = express();

app.use(express.static(__dirname+'/client/'));
app.use('/bower_components', express.static(__dirname+'/bower_components/'))

app.get('/', function(req, res){
  res.send('index.html');
});

var server = app.listen(3020, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('ArtFiend listening on http://%s:%s', host, port);
});
