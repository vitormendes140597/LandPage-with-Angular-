var app = angular.module('SalaoApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  var helloState = {
    name: 'main',
    url: '/',
    templateUrl: 'views/home.html',
    controller:  'HomeController'
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