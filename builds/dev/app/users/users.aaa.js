;(function(){
  'use strict';

  angular
    .module('fit.users', [
      'fit.dbc',
    ])
  .config(usersConfig)

  // @ngInject
  function usersConfig($stateProvider){
    console.log('Users Config')
    $stateProvider
      .state('users', {
        url: '/',
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'uc'
      });
  }

})();
