var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(__dirname+'/client/'));
app.use('/bower_components', express.static(__dirname+'/bower_components/'))


// app.use('/app', express.static(__dirname+'/client/app/'));
// app.use('/gallery', express.static(__dirname+'/client/app/gallery/'));

app.get('/', function(req, res){
  res.send('index.html');
});

var server = app.listen(3020, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('ArtFiend listening on http://%s:%s', host, port);
});
