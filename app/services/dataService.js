app.service('DataService', function($log, apiDataService) {
    var self = this;

    self.getStages = function() {        
        return apiDataService.get("/production/get/growing/stages/");
    };

    self.seedTypes = function() {        
        return apiDataService.get("/production/get/seed/types/");
    };

    self.status = function() {        
        return apiDataService.get("/production/get/source/status/");
    };

    self.postStages=function(obj){
    	return apiDataService.post(url,obj);
    }
});