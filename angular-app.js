(function(){
	//Initialize module
	var app = angular.module('store', []);

	// code stored in the anonymous function is what will be executed when the controller is called
	app.controller('StoreController', function(){
		// 'product' is a property of the controller
		this.products = gems;

	});

	// random variable with parameters
	var gems = [
		{
			name: 'Dodechedron',
			price: 2.95,
			description: '. . .'
			canPurchase: false, // ng-show
    		soldOut: true // ng-hide
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .'
			canPurchase: false
		}
	];
})();