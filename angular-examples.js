// Angular
// =========
// Basic structure of an Angular app


// #############################
// 01
// Directives (Marker on HTML that tells angular to run some JS)
<html ng-app="gemStore">


// #############################
// 02
// Modules (where you put the application code)
// 'Store' is the application name
// Array is where you store dependencies
var app = angular.module('store', []);


// #############################
// 03
// Expressions
// You can put cool dynamic values straight into HTML when you attach the ng-app directive to the HTML tag
// Renders as 'I am 10'
 <html>
  <p>I am {{4 + 6}}</p>
  <p>{{ 'Christopher Walken ' + '*REALLY*' + ' freaks me out.' }}</p>
 </html>

// #############################
// 04
// Controllers define app behavior with functions and values
// Example controller

// Use function wrapper
(function(){
	//Initialize module
	var app = angular.module('store', []);

	// code stored in the anonymous function is what will be executed when the controller is called
	app.controller('StoreController', function(){
		// 'product' is a property of the controller
		this.product = gem;

	});

	// random variable with parameters
	var gem = {
		name: 'Dodechedron',
		price: 2.95,
		description: '. . .'
	}
})();

// Attach controller to HTML with ng-controller directive
// Note structure of the directive, using controller name, followed by JS keyword 'as' then an alias for the directive called 'store' in this case
// Once proper directive is called, Angular will reference controller properties, in this case that's product, which is set equal to the gem variable
// Scope of the controller is only inside of the div
// NOTE: Dollar sign in front of price expression is just HTML, not a jQuery reference

 <div ng-controller="Store Controller as store">
   <h1> {{store.product.name}} </h1>
	 <h2> ${{store.product.price}} </h2>
   <p> {{store.product.description}} </p>
 </div>


// #############################
// 05 - ng-show | ng-hide | ng-repeat Directives
// If you add a parameter that switches (like canPurchase) to your variable, you need ng-show
  var gem = {
    name: 'Dodechedron',
    price: 2.95,
    description: '. . .',
    canPurchase: false, // ng-show
    soldOut: true // ng-hide
  }

// ng-show basically says, "Only show this element if the value of expression = true"
// ng-hide is basically the inverse, "Hide this thing if your value is false"
  <div ng-controller="Store Controller as store">
    <div ng-hide="store.product.soldOut">
      <h1> {{store.product.name}} </h1>
      <h2> ${{store.product.price}} </h2>
      <p> {{store.product.description}} </p>
      <button ng-show="store.product.canPurchase"></button>
    </div>
  </div>

// ng-repeat
// If you have multiple items in a variable (like an array), you can recurse through them with ng-repeat
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

// ng-repeat iterates over array items
  <div ng-controller="Store Controller as store">
    // We use store.products is the array we iterate through, this references the module's controller, where we said 'this.product = gem'
    <div ng-repeat="product in store.products">
      <h1> {{store.product.name}} </h1>
      <h2> ${{store.product.price}} </h2>
      <p> {{store.product.description}} </p>
      <button ng-show="store.product.canPurchase"></button>
    </div>
  </div>


// #############################
// 06 Filters
// Structure of a filter is to add a pipe to an expression which sends this first part of the xpression into the second part of the xpression
// Filter format {{ data | filter:options }}
  <div ng-controller="Store Controller as store">
    <ul class="list-group">
      <li class="list-group-item" ng-repeat="product in store.products">
        // In this case 
        <em class="pull right">{product.price | currency}</em>
      </li>
    </ul>
  </div> 

// Filters include
{{ '201503022315' | date:'yyyy-mm-dd @ h:mma' }} // Date: https://docs.angularjs.org/api/ng/filter/date
{{ 'gem' | uppercase }} // Uppercase and Lowercase, pretty obvious
{{ 'Variable time' | limitTo:## }} //limits number of characters
<li ng-repeat="product in store.products" | limitTo:4> // limits number of items to recurse in an array
<li ng-repeat="product in store.products" | orderBy:'price'> // orders data by parameter in ASCENDING order
<li ng-repeat="product in store.products" | orderBy:'-price'> // orders data by parameter in DESCENDING order


// #############################
// 06 - ng-src directive
// ng-src relies on having image locations stored in a variable array, like this:
  var gems = [
    {
      name: 'Dodechedron',
      price: 2.95,
      description: '. . .'
      canPurchase: false, // ng-show
      soldOut: true, // ng-hide
      images: [
        {
          full: 'big-image.jpg',
          thumb: 'thumb-image.jpg'
        }
        {
          full: 'big-image1.jpg',
          thumb: 'thumb-image2.jpg'
        }        
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .'
      canPurchase: false
    }
  ];


// then you have to attach ng-src to an image request
  <div ng-controller="Store Controller as store">
    <ul class="list-group">
      <li class="list-group-item" ng-repeat="product in store.products">
        // In this case 
        <em class="pull right">{product.price | currency}</em>
        // ng-src references the image array product image array 
        <img ng-src="{{ product.images[0].full }}">
      </li>
    </ul>
  </div> 

// If you want to recurse over a set of images, 
  <li class="small-image pull-left thumbnail" ng-repeat="image in product.images" >
    <img ng-src="{{ image }}" />
  </li>

// Only show the div if the images container has images (so check the images array and see that has something inside with length())
  <div class="gallery" ng-show="{{store.product.images.length()}}">

//
