;(function(){
  'use strict';

  angular
    .module('fit.users')
    .factory('users', usersFactory)

  // @ngInject
  function usersFactory ($q, $http, dbc, $firebaseArray, $firebaseObject) {
    var o = {};
    var ref = dbc.getRef();
    var usersRef = ref.child('users');// new Firebase(FURL + 'users/')

    var users = null;

    o.getUsers = function(){
      return $firebaseArray(usersRef).$loaded(function(_d){
        console.log("got users list with length:", _d.length);
        return _d;
      });
    };

    o.getUser = function(_id){
      return $firebaseObject(usersRef.child(_id)).$loaded();
    };

    o.saveUser = function(_user){
      var user = $firebaseObject(usersRef.child(_user.id));
      return user.$loaded(function(_dbuser){
        _dbuser.name = _user.name;
        _dbuser.surname = _user.surname;
        return _dbuser.$save();
      });
    };

    o.deleteUser = function(_id){
      return $firebaseObject(usersRef.child(_id)).$remove();
    }

    o.createBlankUser = function(){
      return $firebaseArray(usersRef).$add({
        name: '',
        surname: '',
        registered: Firebase.ServerValue.TIMESTAMP,
        last_visit: Firebase.ServerValue.TIMESTAMP
      }).then(function(_ref){
        return $firebaseObject(_ref).$loaded();
      });

      // loaded(function(_d){
      //   console.log("got users list with length:", _d.length);
      //   return _d;
      // });
    }

    /*
      var deferred = $q.defer();
      setTimeout(function(){
        deferred.notify('Users Notify!');
        if(Math.random()>0.5)
          deferred.resolve('Users Resolved!');
        else
          deferred.reject('Users Rejected!');
      },2000);
      return deferred.promise;
    */

    return o;
  }
})();
