'use strict';

angular.module('angular-html5-storage', []);
angular.module('angular-html5-storage')
  .factory('ngHTML5Storage', ['$q', function($q){
    function store(key, value, storeType){
      var store = storeType === 'session' ? window.sessionStorage : window.localStorage;

      if ( !store ) return;

      if ( key && !value ) {
        return angular.fromJson(store.getItem(key));
      }

      if ( key && value ) {
        store.setItem(key, angular.toJson(value));

        return angular.fromJson(store.getItem(key));
      }
    }

    function remove(key, storeType){
      var store = storeType === 'session' ? window.sessionStorage : window.localStorage;

      if ( !store ) return;

      return store.removeItem(key);
    }

    return {
      local: function(key, value){
        var def = $q.defer();
        var result = store(key, value, 'local');

        if ( result ) {
          def.resolve(result);
        } else {
          def.reject();
        }

        return def.promise;
      },
      session: function(key, value){
        var def = $q.defer();
        var result = store(key, value, 'session');

        def.resolve();

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
