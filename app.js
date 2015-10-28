var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/myvote');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var mainController = require('./controllers/voteCtrl')


app.get('/',function(req, res) {
	res.sendFile('html/myvote.html', {root : './public'});

});

app.get('/ballot',function(req, res) {
	res.sendFile('html/ballot.html', {root : './public'});

});

app.post('/createBallot', mainController.createBallot)
app.get('/getballots', mainController.getBallots)








var port = 3000
app.listen(port, function(){
	console.log('Server running on port ' + port);

});