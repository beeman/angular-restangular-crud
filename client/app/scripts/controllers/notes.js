'use strict';

var app = angular.module('scaffoldApp');

app.controller('NotesListCtrl', function ($scope, NoteRepository, $location) {
  $scope.notes = NoteRepository.getList();
  $scope.delete = function (data) {
    NoteRepository.remove(data).then(function () {
      $location.path('/notes');
    });
  };
});

app.controller('NotesItemCtrl', function ($scope, $routeParams, NoteRepository) {
  $scope.note = NoteRepository.get($routeParams.id).then(function (data) {
    $scope.note = data;
  });
});

app.controller('NotesEditCtrl', function ($scope, $routeParams, $location, NoteRepository) {
  $scope.note = NoteRepository.get($routeParams.id).then(function (data) {
    $scope.note = data;
  });
  $scope.save = function () {
    $scope.note.put().then(function () {
      $location.path('/notes/' + $routeParams.id);
    });
  };
});

app.controller('NotesAddCtrl', function ($scope, $location, NoteRepository) {
  $scope.add = function () {
    NoteRepository.create($scope.note).then(function () {
      $location.path('/notes');
    });
  };
});