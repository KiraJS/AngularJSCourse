;(function(){
  'use strict';

  angular
    .module('fit', [
      'ui.router',
      'ui.bootstrap',
      'fit.home',
      'fit.about',
      'fit.dbc',
      'fit.users',
      'fit.registration',
    ])
    .constant('FURL', 'https://angjscourse.firebaseio.com/')
    .constant('CONSTANT', 'This is constant')
    .value('Value', {'val': 'This is value'})
    .factory('MainFactory', MainFactory)
    .service('MainService', MainService)
    .controller('MainCtrl', MainController)
    .controller('SubCtrl', SubController)
    .run(MainRun)
    .config(MainConfig);

    // @ngInject
    function MainService() {

      // Private
      var number = 0;
      var fn = function() {

      };
      // Public

      this.plus = function() {
        this.count = ++number;
        return this;
      }/* Plus Number*/;

      this.minus = function() {
        this.count = --number;
        return this;
      }/* Minus Number*/;
    }


    // @ngInject
    function MainFactory() {
      var o = {
        count: number,
        plus: plus,
        minus: minus
      };
      // Private
      var number = 0;
      var fn = function() {

      };
      // Public

      function plus() {
        this.count = ++number;
        return this;
      }/* Plus Number*/

      function minus() {
        this.count = --number;
        return this;
      }/* Minus Number*/

      return o;
    }

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
    function MainConfig ($urlRouterProvider, $logProvider) {
      console.log('Main Config');
      $urlRouterProvider.otherwise('/');
      $logProvider.debugEnabled(false);

    }

})();


var Singleton;
Singleton = (function(){
  var instance;
  instance = {
    count: 0
  };
  return function(){
    return instance;
  };
}());

var sin1, sin2;
sin1 = new Singleton();
sin2 = new Singleton();

console.log(sin1 === sin2);
console.log(sin1.count === sin2.count);
console.log(sin1.constructor === sin2.constructor);
