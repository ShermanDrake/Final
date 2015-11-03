// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("#myModal").modal();
//     });
// });
angular.module('voteApp', ['ngAnimate', 'ngRoute', 'chart.js']);
angular.module('voteApp');


angular.module('voteApp')
	.config(['$routeProvider', function($routeProvider){
		// No need to define #, it is assumed
		$routeProvider
			.when('/', {
				templateUrl : '/html/myvote.html',
				controller : 'mainController'
			})
			.when('/ballot', {
				templateUrl : '/html/ballot.html',
				controller : 'mainController'
			})
			.when('/openBallot/:id', {
				templateUrl : '/html/openBallot.html',
				controller  : 'mainController'
			})
			.when('/results/:id', {
				templateUrl : '/html/results.html',
				controller : 'mainController'
			})
			.when('/error', {
				templateUrl : 'html/error.html',
				controller : 'mainController'
			})
			.otherwise({
				redirectTo : '/error'
			})

	}])


angular.module('voteApp')
.controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

  $scope.ballot = false;
  $scope.newBallot = {};
  $scope.newEmail = {};
  $scope.newBallot.entries = [{},{}]
  $scope.newBallot.emails = [{}]
  $scope.newBallot.open = false;
  $scope.ballots = {};
  $scope.vote = ''
  $scope.voteList = []
  $scope.labels = []




  $scope.submitVote = function(){
  	var ballotInfo = {vote : $scope.vote, ballot : $routeParams.id}
  	console.log(ballotInfo)
  	$http.post('/submitVote', ballotInfo)

		.then(function(returnData){
			console.log( returnData.data)
			window.location.href = '/#/results/' + $routeParams.id
			$scope.ballots = returnData.data

  	})


  }


if($routeParams.id){
  	$http.get('/openBallot/' + $routeParams.id)
  	.then(function(returnData){
  		console.log(returnData.data)
  		$scope.ballot = returnData.data
  		// console.log($scope.ballot)	

  	})

  	$http.get('/getVotes/' + $routeParams.id)
  	.then(function(returnData){
  		$scope.voteCount = returnData.data
  		console.log($scope.voteCount)
  		$scope.labels = []
  		$scope.data = []
  		returnData.data.forEach(function(object){
  			for(var key in object){
  				$scope.labels.push(key)
  				$scope.data.push(object[key])
  			}

  		})

  	})

  }


$("#myBtn").click(function(){
    $("#myModal").modal();
});


$scope.isLoggedIn = function(){

	$http.get('/auth/login')
	.then(function(returnData){
		console.log(returnData)
	})
}


$scope.flip = function() {
  $scope.ballot = !$scope.ballot;
}


$http.get('/getballots')
	.then(function(returnData){
			$scope.ballots = returnData.data
			// console.log(returnData)
	})

$scope.ballotSubmit = function(){
	$scope.newBallot.open = !$scope.newBallot.open
	console.log($scope.newBallot)
	$http.post('/createBallot', $scope.newBallot)
		.then(function(returnData){
			console.log( returnData.data)
			window.location.href = '/'
			$scope.ballots = returnData.data
		})
}

$scope.addEntry = function(){
	$scope.newBallot.entries.push({})

}

$scope.addEmail = function(){
	$scope.newBallot.emails.push({})
}




}])





