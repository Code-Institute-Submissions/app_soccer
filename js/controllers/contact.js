var contact = angular.module("ContactController", []);

contact.controller('ContactCont', function($scope) {
 
 		$scope.msg = 'Contact Us';
 		$scope.hideForm = false;
        $scope.contactUser = {};
 
        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) {
                $scope.contactUser.name = $scope.user.name;
                $scope.contactUser.email = $scope.user.email;
                $scope.contactUser.message = $scope.user.message;
				$scope.hideForm = true;
                
            }	
            
           		$scope.msg = 'Form submitted successfully!';
 			
        }
    });