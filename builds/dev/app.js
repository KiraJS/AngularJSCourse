;(function(){
  'use strict';

  angular
  .module('fit', [
    'fit.home',
  ])
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
  function HomeController(){
    var s = this;

    s.title = 'Home Page';

    s.name = 'LoftSchool';

    s.valuables = ['We are the best', 'We are awesome'];

    s.addVal = function(){};
  }
})();
