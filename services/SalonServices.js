app.service("SalonService",function($http){

	this.get = function(nome){

		return $http({
			method: "GET",
			url: "http://localhost/landpage/controller.php",
			params:{nome:nome},
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		});
	}

});