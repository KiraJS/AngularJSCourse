
;(function(){
    'use strict';

  angular
    .module('fit.home', [
    ])
    .controller('HomeCtrl', HomeController)

  /**
  * Home controller
  */
  //@ngIngect
  function HomeController($scope){
    var s = this;

    s.title = 'Home Page';

    s.name = 'LoftSchool';

    s.valuables = ['We are the best', 'We are awesome'];

    s.addVal = function(_newVal){
      s.valuables.push(_newVal);
    };
  }
})();
