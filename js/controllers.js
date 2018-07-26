app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
});

scrollApp.controller('titleScrollController', function($scope, $interval, $timeout) {
    $scope.index = 0;
    $scope.titles = [
      "Web Developer",
      "Father of Three",
      "Husband of One",
      "Follower of Jesus",
      "World Traveller",
      "Language Enthusiast",
      "Introvert",
      "Artist"
    ];

    $scope.changeTitle = function(){
      $scope.jobTitle = $scope.titles[$scope.index];
      $scope.index++;
      if($scope.index==$scope.titles.length-1)
        $scope.index = 0;
    };

    var titleLoop;
    $scope.startLoop = function(){
      $interval.cancel(titleLoop);
      titleLoop = $interval($scope.changeTitle, 200);
    }
    $scope.stopLoop = function(){
      $interval.cancel(titleLoop);
      $scope.jobTitle = $scope.titles[0];
    }

    $scope.startLoop();
    $timeout($scope.stopLoop, 2000);
});
