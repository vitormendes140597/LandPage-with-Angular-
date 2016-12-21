app.service("SalonService",function($http){

	var _self = this;
	
	_self.getContentBody = function(nome){

		return $http({
			method: "GET",
			url: "http://localhost/landpage/controller.php",
			params:{nome:nome},
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		});
	}

});