$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});
angular.module('voteApp', ['ngAnimate']);
angular.module('voteApp');
angular.module('voteApp').controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.ballot = false;
  $scope.newBallot = {};
  $scope.newBallot.entries = [{}]
  // $scope.newEmail.entries = [{}]


  



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

// $scope.addEmail = function(){
// 	$scope.newEmail.entries.push({})
// }




}])

