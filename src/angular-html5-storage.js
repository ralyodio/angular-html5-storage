'use strict';

angular.module('ngHTML5Storage', []);
angular.module('ngHTML5Storage')
  .factory('$webStoreRemove', ['$q', function($q){
    return function (key, storeType){
      var store = storeType === 'session' ? window.sessionStorage : window.localStorage;

      if ( !store ) return;

      return store.removeItem(key);
    }
  }])
  .factory('$webStoreSet', ['$q', function($q){
    var store = storeType === 'session' ? window.sessionStorage : window.localStorage;

    if ( !store ) return;

    if ( key && !value ) {
      return angular.fromJson(store.getItem(key));
    }

    if ( key && value ) {
      store.setItem(key, angular.toJson(value));

      return angular.fromJson(store.getItem(key));
    }
  }])
  .factory('$sessionStorage', [function(){

  }])
  .factory('$localStorage', ['$q', '$store', function($q){

    return {
      local: function(key, value){
        var def = $q.defer();
        var result = store(key, value, 'local');

        def.resolve(result);

        return def.promise;
      },
      session: function(key, value){
        var def = $q.defer();
        var result = store(key, value, 'session');

        def.resolve(result);

        return def.promise;
      },
      remove: {
        local: function(key){
          var def = $q.defer();

          remove(key, 'local');
          def.resolve();

          return def.promise;
        },
        session: function(key){
          var def = $q.defer();

          remove(key, 'session');
          def.resolve();

          return def.promise;
        }
      }
    };
  }]);
