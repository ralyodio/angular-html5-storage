ngHTML5Storage -> myService (can by db, local or sess ) -> code call their service
ngHTML5Storage -> myServiceDb -> code call their service (optional)
ngHTML5Storage -> myServiceSession -> code call their service (optional)
ngHTML5Storage -> myServiceLocal -> code call their service (optional)


.factory('myStorageService', function(ngHTML5Storage, localStorage, sessionSession){
	return ngHTMLStorage.db();
});

.controller('AccountCtrl', function(localStrorage, sesesionsStroage){
	$scope.login = function(){
		myStorageService.set(user.profile);
		myStorageServiceSess.set(user.authToken);
	}
});