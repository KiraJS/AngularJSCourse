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
    MainController.$inject = ["$rootScope"];

    // @ngInject
    function SubController($rootScope)
    {
      var s = this;
      $rootScope.root = 'Root 2';
      s.hello_message = 'Sub message';

    }
    SubController.$inject = ["$rootScope"];

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
    MainRun.$inject = ["$log", "$rootScope"];

    // @ngInject
    function MainConfig ($routeProvider, $logProvider) {
      console.log('Main Config');
      $routeProvider.otherwise({ redirectTo: '/' });
      $logProvider.debugEnabled(false);

    }
    MainConfig.$inject = ["$routeProvider", "$logProvider"];

})();

;(function(){
  'use strict';

  angular
    .module('fit.home', [
    ])
    .controller('HomeCtrl', HomeController)
    .run(/*@ngInject*/["$log", function($log){$log.debug('Home Run')}])
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
    HomeController.$inject = ["$scope", "$log", "$rootScope"];

    // @ngInject
    function HomeConfig ($routeProvider) {
      console.log('Home Config');
      $routeProvider
        .when('/', {
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl'
        });
    }
    HomeConfig.$inject = ["$routeProvider"];

})();

;(function(){
  'use strict';

  angular
    .module('fit.about', [
      'ngRoute'
    ])
    .controller('AboutCtrl', AboutController)
    .run(/*@ngInject*/["$log", function($log){$log.debug('About Run')}])
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
    AboutController.$inject = ["$log", "$rootScope"];

    // @ngInject
    function AboutConfig ($routeProvider) {
      console.log('About Config');
      $routeProvider
        .when('/about', {
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl'
        });
    }
    AboutConfig.$inject = ["$routeProvider"];

})();

