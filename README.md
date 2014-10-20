# angular-html5-storage

HTML5 web storage for Angular.js (ngHTML5Storage)

## Install

    bower install angular-html5-storage --save

## Usage

create your service wrapper (optional)

    app
      .factory('myStorageService', ['ngHTML5Storage', function(ngHTML5Storage){
        return {
          saveStuffInLocalStorage: function(key, value){
            return ngHTML5Storage.local(key, value);
          },
          saveStuffInSessionStorage: function(key, value){
            return ngHTML5Storage.session(key, value);
          }
        };
      }]);

    //in your controller (be sure to inject your service)
    myStorageService.saveStuffInLocalStorage(key, value)
        .then(function(data){
            //it is saved in local storage
        });
        

using ngHTML5Storage directly (without a service wrapper)

    app
        .controller('MyController', ['ngHTML5Storage', function(ngHTML5Storage){
          ngHTML5Storage.session(key, value)
            .then(function(data){
                //it is saved in session storage
            });
        });

## Methods of ngHTML5Storage

* `.local(key, value)` - set a value by key in localStorage
* `.session(key, value)` - set a value by key in sessionStorage
* `.local(key)` - get a value by key in localStorage
* `.session(key)` - get a value by key in sessionStoragedd 
* `.remove.local(key)` - remove by key from localStorage
* `.remove.session(key)` - remove by key from sessionStorage


## Run tests

    gulp test




MIT License
