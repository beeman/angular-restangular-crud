'use strict';

var app = angular.module('scaffoldApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'restangular',
  'ui.router'
]);

app.config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api');
});


app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });


  }
]);