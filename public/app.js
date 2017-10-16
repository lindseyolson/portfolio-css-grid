var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
    controller: 'MainController as mc'
  }); // end route provider
}); // end app config
