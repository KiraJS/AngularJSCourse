;(function(){
  'use strict';

  angular
  .module('fitnessTracker', [])
  .controller('MainCtrl', MainController)
  .controller('SubCtrl', SubController)

  // @ngInject
  function MainController () {
    var s = this;

      s.hello_message = 'Привет, мир!';
  }

  // @ngInject
  function SubController () {
      var s = this;

        s.hello_message = 'hello_sub_message';
  }
})();
