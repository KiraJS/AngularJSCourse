;(function(){
  'use strict';

  angular
    .module('fit', [
      'ngRoute',
      'ui.bootstrap',
      'fit.home',
      'fit.about',
    ])
    .controller('MainCtrl', MainController)
    .controller('SubCtrl', SubController)
    .run(MainRun)
    .config(MainConfig);

    // @ngInject
    function MainController ($rootScope) {
      var s = this;

      s.hello_message = "Привет, мир!";
      $rootScope.root = 'Root 1';
    }

    // @ngInject
    function SubController($rootScope)
    {
      var s = this;
      $rootScope.root = 'Root 2';
      s.hello_message = 'Sub message';

    }

    // @ngInject
    function MainRun($log, $rootScope){
      $log.debug('Main Run');

      $rootScope.alerts = [];
      $rootScope.addAlert = function(_msg, _type){
        _type = _type || 'warning';
        $rootScope.alerts.push({msg: _msg, type: _type});
      };

      $rootScope.closeAlert = function(index) {
        $rootScope.alerts.splice(index, 1);
      };
    }

    // @ngInject
    function MainConfig ($routeProvider, $logProvider) {
      console.log('Main Config');
      $routeProvider.otherwise({ redirectTo: '/' });
      $logProvider.debugEnabled(false);

    }

})();
