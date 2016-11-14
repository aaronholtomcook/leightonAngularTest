describe('My Test', function() {
	var scope, controller;
	beforeEach(module('app'));
	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('appCtrl', {
			$scope: scope
		});
	}));
	it('Should have the correct greeting', function() {
		expect(scope.greeting).toEqual('Welcome!');
	});
});