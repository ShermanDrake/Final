// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("#myModal").modal();
//     });
// });
angular.module('voteApp', ['ngAnimate', 'ngRoute']);
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
			.when('/error', {
				templateUrl : 'html/error.html',
				controller : 'mainController'
			})
			.otherwise({
				redirectTo : '/error'
			})

	}])


angular.module('voteApp').controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.ballot = false;
  $scope.newBallot = {};
  $scope.newEmail = {};
  $scope.newBallot.entries = [{}]
  $scope.newBallot.emails = [{}]


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
			$scope.ballot = returnData.data
	})

$scope.ballotSubmit = function(){
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



