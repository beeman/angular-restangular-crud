'use strict';

angular.module('scaffoldApp').controller('NotesCtrl', function ($scope, $location, NoteRepository) {
        
        $scope.notes = NoteRepository.getList();
        $scope.add = function(data) {
          var newNote = {
            "name": $scope.name,
            "content": $scope.content,   
          };
          NoteRepository.create(newNote).then(function(){
              $location.path('/notes');   
          });

        };
  });
