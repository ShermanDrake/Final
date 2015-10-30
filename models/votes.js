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
// mongoose.connect('mongodb://localhost/myvote')

var ballotSchema = mongoose.Schema({

	title			: {type : String, required: true},
	entries 		: {type : Array, required: true},
	emails			: {type : Array},
	open			: {type : Boolean, required: true},

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