;(function(){
  'use strict';

  angular
    .module('fit.about', [
      'ngRoute'
    ])
    .controller('AboutCtrl', AboutController)
    .run(/*@ngInject*/function($log){$log.debug('About Run')})
    .config(AboutConfig);

    /**
     * About Controller
     */
    // @ngInject
    function AboutController($log, $rootScope)
    {
      $log.debug('AboutController');
      var s = this;
      $rootScope.currentPage = 'about';

    }

    // @ngInject
    function AboutConfig ($routeProvider) {
      console.log('About Config');
      $routeProvider
        .when('/about', {
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl'
        });
    }

})();
