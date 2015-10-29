var ballotModel = require('../models/votes.js');

module.exports = {

	createBallot : function(req, res){
		var ballot = new ballotModel.Ballot(req.body)
		// console.log(req.body)
		// console.log(ballot)
		ballot.save(function(err, doc) {
			if(err) {

				console.log(err)
			}

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
		email	: req.body.email, 
	})

	newBallot.save( function(err, doc){
		res.send(doc)

		// Here is where you would want to send the email
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

