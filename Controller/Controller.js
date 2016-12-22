
app.controller('SalaoController', function SalaoController(SalonService,$scope, $stateParams,$http){
	
	var option = $stateParams.nome;

	if(option != null)
	{
		SalonService.getContentBody(option).then(function success(response){
			console.log(response);

			if(response.status == 200){
				
				$scope.salon = response.data;
				
			}

		});;
	}
	else{
		option = 'salaovip';

		SalonService.getContentBody(option).then(function success(response){
			console.log(response);

			if(response.status == 200){
				
				$scope.salon = response.data;
				
			}

		});
	}
});


