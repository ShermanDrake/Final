// var allBallots = [];

// var Ballot = function(ballotData){

// 	this.name = ballotData.name;

// 	allBallots.push(this)
// }

// module.exports = {
// 	allBallots : allBallots,
// 	Ballot     : Ballot

// }

var mongoose = require('mongoose');

var ballotSchema = mongoose.Schema({

	title			: {type : String, required: true},
	entries 		: {type : Array, required: true},
	recipientEmail 	: {type : Array},

});

var Ballot = mongoose.model('Ballot', ballotSchema);

var userSchema = mongoose.Schema({

	userName	: {type	: String, required: true},
	email       : {type : String, required: true},
	password	: {type : String, required: true}

});

var User = mongoose.model('User', userSchema);




module.exports = {
		Ballot: Ballot,
		User  : User
	};