;(function(){
  'use strict';

  angular
    .module('fit.about', [
    ])
    .controller('AboutCtrl', AboutController)
    .controller('Page1Ctrl', Page1Controller)

    .run(/*@ngInject*/function($log){$log.debug('About Run')})
    .config(AboutConfig);

    /**
     * About Controller
     */
    // @ngInject
    function AboutController($log, $rootScope, Value, CONSTANT, $state, $stateParams)
    {
      $log.debug('AboutController');
      var s = this;


      console.log('CONSTANT' ,  CONSTANT);
      CONSTANT = "This is AboutCtrl";
      console.log('CONSTANT ' ,  CONSTANT);

      console.log('Value ', Value.val);
      Value.val = "This is AboutCtrl";
      console.log('Value ', Value.val);


      $rootScope.currentPage = 'about';

    }

    // @ngInject
    function Page1Controller($scope)
    {
      var s = this;
      $scope.$on('broadcastExample', function(e, msg){
        console.warn('broadcastExample catched in Page1Ctrl with data', msg.msg);
      });
      $scope.scope = 'page1';
      $scope.$emit('page1Event', "Hello from page1");
    }


    // @ngInject
function AboutConfig ($stateProvider) {
  console.log('About Config');
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutCtrl',
      authenticate: false
    })
    .state('about.page1', {
      url:'/page1',
      controller: 'Page1Ctrl',
      templateUrl: 'app/about/about.page1.html',
      authenticate: true
    })
    .state('about.page2', {
      url:'/page2',
      templateUrl: 'app/about/about.page2.html',
      authenticate: true
    })
    .state('about.page3', {
      url:'/page3',
      templateUrl: 'app/about/about.page3.html',
      authenticate: true
    })
}


})();
