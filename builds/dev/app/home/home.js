;(function(){
  'use strict';

  angular
    .module('fit.home', [
    ])
    .controller('HomeCtrl', HomeController)
    .run(/*@ngInject*/function($log){$log.debug('Home Run')})
    .config(HomeConfig)

    /**
     * Home Controller
     */
    // @ngInject
    function HomeController($scope, $log, $rootScope)
    {
      $log.debug('HomeController');
      var s = this;

      $rootScope.currentPage = 'home';

      s.title = "Home Page";
      s.name = "Loftschool";
      s.valuables = ['We are the best', 'We are awesome'];

      s.addValuable = function(_newVal){
        s.valuables.push(_newVal);
      }
    }

    // @ngInject
    function HomeConfig ($routeProvider) {
      console.log('Home Config');
      $routeProvider
        .when('/', {
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl'
        });
    }

})();
