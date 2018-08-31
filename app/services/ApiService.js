app.service('apiDataService', function($http, $q, $log, $window) {
        var self = this;
        var baseUrl="http://54.213.103.26:8080/erp_api";

        self.get = function(endpoint) {        
            return $http.get(baseUrl+endpoint)
                .then(function(response) {
                    return response;
                }, function(error) {
                    return error;
                });
        };

        self.post = function(endpoint, payload) {           
            return $http.post(endpoint, angular.toJson(payload))
                .then(function(response) {
                    return response;
                }, function(error) {
                    return error;
                });
        };

    });