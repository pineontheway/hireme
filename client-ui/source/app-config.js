var app = angular.module('client-ui', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url : '/home',
            templateUrl : 'errror/err.ejs'
        });
});
