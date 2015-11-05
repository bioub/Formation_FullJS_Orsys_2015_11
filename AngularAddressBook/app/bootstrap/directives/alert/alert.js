
angular.module('bootstrapAlert', [])
       .directive('btAlert', function() {
           return {
               restrict: 'E',
               scope: {
                   type: '@'
               },
               transclude: true,
               templateUrl: 'app/bootstrap/directives/alert/alert.html'
           };
       });