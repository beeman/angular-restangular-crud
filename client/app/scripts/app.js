'use strict';

var app = angular.module('scaffoldApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular'
])
  .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:3000/api');
      })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })


      .when('/notes/', {
        templateUrl: 'views/notes/list.html',
        controller: 'NotesCtrl',
        resolve: {
          notes: function(NoteRepository){
            return NoteRepository.getList();
          }
        }
      })
      .when('/notes/add', {
        templateUrl: 'views/notes/add.html',
        controller: 'NotesCtrl'
      })
      .when('/notes/delete/:id', {
        controller: 'NotesCtrl',
        resolve: {
          note: function(NoteRepository, $route){
            return NoteRepository.ad($route.current.params.id);
          }
        }

      })
      .when('/notes/:id', {
        templateUrl: 'views/notes/item.html',
        controller: 'NotesCtrl',
        resolve: {
          note: function(NoteRepository, $route){
            return NoteRepository.get($route.current.params.id);
          }
        }
      })
      .when('/notes/edit/:id', {
        templateUrl: 'views/notes/edit.html',
        controller: 'NotesCtrl',
        resolve: {
          note: function(NoteRepository, $route){
            return NoteRepository.get($route.current.params.id);
          }
        }
      })


      .otherwise({
        redirectTo: '/'
      });
  });


app.factory('AbstractRepository', [function () {

    function AbstractRepository(restangular, route) {
      this.restangular = restangular;
      this.route = route;
    }

    AbstractRepository.prototype = {
        getList: function (params) {
            return this.restangular.all(this.route).getList(params).$object;
        },
        get: function (id) {
            return this.restangular.one(this.route, id).get();
        },
        getView: function (id) {
            return this.restangular.one(this.route, id).one(this.route + 'view').get();
        },
        update: function (updatedResource) {
            return updatedResource.put();
        },
        create: function (newResource) {
            return this.restangular.all(this.route).post(newResource);
        },
        remove: function (id) {
            return this.restangular.delete(this.route, id);
        }
        // etc.
    };

    AbstractRepository.extend = function (repository) {
        repository.prototype = Object.create(AbstractRepository.prototype);
        repository.prototype.constructor = repository;
    };

    return AbstractRepository;
}]);



app.factory('HostRepository', ['Restangular', 'AbstractRepository', function (restangular, AbstractRepository) {

    function HostRepository() {
      AbstractRepository.call(this, restangular, 'customers');
    }

    AbstractRepository.extend(HostRepository);
    return new HostRepository();
}]);


app.factory('NoteRepository', ['Restangular', 'AbstractRepository', function (restangular, AbstractRepository) {

    function NoteRepository() {
      AbstractRepository.call(this, restangular, 'notes');
    }

    AbstractRepository.extend(NoteRepository);
    return new NoteRepository();
}]);
