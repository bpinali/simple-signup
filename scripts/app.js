var app = angular.module('signup', []);

app.directive('optIn', function () {
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        transclude: true
    }
});
