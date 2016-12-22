var app = angular.module('SalaoApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  var helloState = {
    name: 'salaovip',
    url: '/',
    templateUrl: 'views/salaovip.html',
    controller:  'SalaoController'
  }

  var aboutState = {
    name: 'salao',
    url: '/:nome',
    templateUrl: 'views/salao.html',
    controller: "SalaoController"
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $urlRouterProvider.otherwise('/');
});