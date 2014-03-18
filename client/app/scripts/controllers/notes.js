'use strict';

var app = angular.module('scaffoldApp');

/* Define the Repository that interfaces with Restangular */
app.factory('NoteRepository', ['Restangular', 'AbstractRepository',
  function (restangular, AbstractRepository) {

    function NoteRepository() {
      AbstractRepository.call(this, restangular, 'notes');
    }

    AbstractRepository.extend(NoteRepository);
    return new NoteRepository();
  }
]);

/* Here the controllers are defines */
app.controller('NotesListCtrl', function ($scope, NoteRepository) {
  $scope.notes = NoteRepository.getList();
  $scope.delete = function (data) {
    if(window.confirm('Are you sure?')) {
      NoteRepository.remove(data).then(function () {
          $scope.notes = NoteRepository.getList();
        });
    }
  };
});

app.controller('NotesItemCtrl', function ($scope, $stateParams, NoteRepository) {
  $scope.note = NoteRepository.get($stateParams.id).then(function (data) {
    $scope.note = data;
  });
});

app.controller('NotesEditCtrl', function ($scope, $stateParams, $location, NoteRepository) {
  $scope.note = NoteRepository.get($stateParams.id).then(function (data) {
    $scope.note = data;
  });
  $scope.save = function () {
    $scope.note.put().then(function () {
      $location.path('/notes/' + $stateParams.id);
    });
  };
});

app.controller('NotesAddCtrl', function ($scope, $location, NoteRepository) {
  $scope.save = function () {
    NoteRepository.create($scope.note).then(function () {
      $location.path('/notes');
    });
  };
});

/* Below are the states that are used */
app.config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider
    .state('notes', {
      abstract: true,
      url: '/notes',
      templateUrl: 'views/notes/main.html'
    })

    .state('notes.list', {
      url: '',
      templateUrl: 'views/notes/list.html',
      controller: 'NotesListCtrl'
    })

    .state('notes.add', {
      url: '/add',
      templateUrl: 'views/notes/edit.html',
      controller: 'NotesAddCtrl'
    })

    .state('notes.edit', {
      url: '/edit/{id}',
      templateUrl: 'views/notes/edit.html',
      controller: 'NotesEditCtrl'
    })

    .state('notes.item', {
      url: '/{id}',
      templateUrl: 'views/notes/item.html',
      controller: 'NotesItemCtrl'
    });
  }
]);