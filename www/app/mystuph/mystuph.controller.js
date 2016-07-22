angular.module('app.mystuphCtrl', [])

.controller('mystuphCtrl', function($scope, $ionicModal, $timeout) {
	$scope.name = "eric";
	console.log('mystuphCtrl loaded');
})