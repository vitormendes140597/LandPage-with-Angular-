app.service("SalonService",function($http){

	var _self = this;
	
	_self.getContentBody = function(nome){

		return $http({
			method: "GET",
			url: "http://192.168.0.36/landpage/controller.php",
			params:{nome:nome},
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		});
	}

});