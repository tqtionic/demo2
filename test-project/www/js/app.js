
var app = angular.module('myproject', ['ionic','ion-datetime-picker','ion-autocomplete'])

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });


  $urlRouterProvider.otherwise('/list')
});

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});