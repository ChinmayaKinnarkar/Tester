app.controller('forgotCtrl', ['$http', '$location', 'queryService', 'authService', function ($http, $location, queryService, authService) {

    var main = this;

    //function to reset password
    this.submit = function () {
        var data = {
            email: main.email
        }

        queryService.resetPassword(data).then(function successCallback(response) {
            if (response.data.error === true) {
                console.log(response.data.message);
            } else {
                var userID;
                var data = response.data.data;
                authService.setToken(response.data.token);
                $location.path('/resetPassword/' + data._id);
            }
        }, function errorCallback(response) {
            console.log(response);
        });
    } 

}]);
