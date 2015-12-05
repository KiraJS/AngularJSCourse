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
    function AboutController($log, $rootScope, Value, CONSTANT)
    {
      $log.debug('AboutController');
      var s = this;

      console.log('CONSTANT' ,  CONSTANT);
      CONSTANT = "This is AboutCtrl"
      console.log('CONSTANT ' ,  CONSTANT);

      console.log('Value ', Value.val);
      Value.val = "This is AboutCtrl"
      console.log('Value ', Value.val);


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
