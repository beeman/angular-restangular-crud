'use strict';

var app = angular.module('scaffoldApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
]);

app.config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api');
});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })

    .when('/notes/', {
      templateUrl: 'views/notes/list.html',
      controller: 'NotesListCtrl'
    })
    .when('/notes/add', {
      templateUrl: 'views/notes/add.html',
      controller: 'NotesAddCtrl'
    })
    .when('/notes/:id', {
      templateUrl: 'views/notes/item.html',
      controller: 'NotesItemCtrl'
    })
    .when('/notes/edit/:id', {
      templateUrl: 'views/notes/edit.html',
      controller: 'NotesEditCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });
});