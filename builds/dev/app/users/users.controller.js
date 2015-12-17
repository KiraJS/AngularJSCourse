;(function(){
  'use strict';

  angular
    .module('fit.users')
    .controller('UsersCtrl', usersCtrlFunction)


  // @ngInject
  function usersCtrlFunction($rootScope, users){
    var s = this;
    $rootScope.currentPage = 'users';

    s.editUser = function(_user){
      console.log(_user);
      s.editFormShow = true;
      s.editingUser = {
        id: _user.$id,
        name: _user.name,
        surname: _user.surname
      };
    };

    s.saveUser = function(){
      users.saveUser(s.editingUser).then(function(){
        s.cancelEditUser();
      });
    }

    s.removeUser = function(){
      users.deleteUser(s.editingUser.id).then(function(){
        s.cancelEditUser();
      })
    }

    s.cancelEditUser = function(){
      s.editFormShow = false;
      s.editingUser = {
        id: null,
        name: null,
        surname: null
      };
    }
    s.cancelEditUser();

    s.createUser = function(){
      users.createBlankUser().then(function(_d){
        s.editUser(_d);
      })
    }

    s.users = [];
    users.getUsers().then(function(_data){
      s.users = _data;
    })
  }

})();
