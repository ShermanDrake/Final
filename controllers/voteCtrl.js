var ballotModel = require('../models/votes.js');

//function that calculates all the possible vote options.
var voteOptions = function(object){
var options = [];
object = object || {}
object.entries.forEach(function(element){
	options.push(element.name)
})
return options
}

var voteSort = function(votes, selections){
var results = [];
selections = selections || []
votes = votes || []
selections.forEach(function(selection){
	var result = votes.filter(function(vote){
		return vote.vote === selection;

	})
	results.push(result)

})
return results
}
var count = function(array){
	var finalCount = []
	array = array || []
if( array.length ){	
	array.forEach(function(results){

		if (results && results.length){
			console.log('results  ', results)
			// console.log('count  ', results['length'])
			var vote = results[0]['vote'];
			var count = results['length'];
			var countObject = {}
			countObject[vote] = count
			finalCount.push(countObject);
		}

	})
}
	return finalCount
}






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
		ballotModel.Ballot.find({
		}, function(err, docs){
			res.send(docs)	
		})

	}, 
	getBallot: function(req, res) {
		ballotModel.Ballot.findOne({_id:req.params.id}, function(err, docs){
			console.log('docs  ', docs)
			res.send(docs)
		})
	},

	submitVote: function(req, res) {
		// ballotModel.Vote.save
		var vote = new ballotModel.Vote(req.body)
		vote.save(function(err, doc){
			if(err) {
				console.log(err)
			}
			console.log(doc)
			res.redirect('/#/results')
		})

	},
	getVotes: function(req, res) {
		// find all the votes that belong to a ballot
		ballotModel.Vote.find({
			ballot : req.params.ballotId
		}, function(err, docs){
			ballotModel.Ballot.find({
				_id:req.params.ballotId
			},function(err, ballot){
				var options = voteOptions(ballot[0])
				var votes = voteSort(docs, options)
				var finalCount = count(votes)
			res.send(finalCount)


			})

		})

	}

}



// var createBallot = function(req, res){

// 	var newBallot = newBallot({

// 		name	: req.body.name,
// 		entries	: req.body.entries.split(', '),
// 		email	: req.body.email, 
// 	})

// 	newBallot.save( function(err, doc){
// 		res.send(doc)

// 		// Here is where you would want to send the email
// 	})
// }

// var findBallots = function(req, res) {

// 	console.log('REQ PARAMs', req.params)
// 	if (req.params.ballotName){
// 		Ballot.findOne({name : req.params.ballotName}, function(err, doc){
// 				res.send(doc)
// 		})
// 	}
// 	else{
// 		Ballot.find({}, function(err, docs){
// 			res.send(docs)
// 		})
// 	}
// }

// var openBallots = function(req, res) {

// 	var openBallots = openBallots({

// 		name  :  req.body.name,
// 	})
// }













