var ballotModel = require('../models/votes.js');

module.exports = {

	createBallot : function(req, res){
		var ballot = new ballotModel(req.body)
		console.log(req.body)
		
		ballot.save(function(err, doc) {
			res.send(doc)

		})
	},

	getBallots : function(req, res){
		res.send(ballotModel.allBallots)
	}

}

var createBallot = function(req, res){

	var newBallot = newBallot({

		name	: req.body.name,
		entries	: req.body.entries.split(', '),
	})

	newBallot.save( function(err, doc){
		res.send(doc)
	})
}
var findBallots = function(req, res) {

	console.log('REQ PARAMs', req.params)
	if (req.params.ballotName){
		Ballot.findOne({name : req.params.ballotName}, function(err, doc){
				res.send(doc)
		})
	}
	else{
		Ballot.find({}, function(err, docs){
			res.send(docs)
		})
	}
}

