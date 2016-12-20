app.controller('HomeController',HomeController);

app.controller('SalaoController', function SalaoController(SalonService,$scope, $stateParams,$http){
	

	$scope.teste= "SalaoController";

	var option = $stateParams.nome;
	console.log(option);

	if(option != null)
	{
		SalonService.getContentBody(option).then(function success(response){
			console.log(response);

			if(response.status == 200){
				
				$scope.salon = response.data;
				
			}

		});;
	}

});





function HomeController($scope){
	$scope.teste = "Hello World";
}