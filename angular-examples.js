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

// #############################
// 07 - ng-click, ng-init, ng-class directives
// ng-click gives angular a way to evaluate an argument, as to whether or not action X should be happening
// AKA, 2-way data binding, expression is re-evaluated when properties change

// This would be saying, 'When value = 1, do something'
// ng-init sets initial value of 'tab' here, so the angular can tell the browser which state to show first
<section ng-init="tab = 1">  
  <ul>
    <li ng-class="{ active:tab === 1 }">
      <a href ng-click="tab = 1">Description</a>
    </li>
    <li ng-class="{ active:tab === 2 }">
      <a href ng-click="tab = 2">Description</a>
    </li>
    <li ng-class="{ active:tab === 3 }">
      <a href ng-click="tab = 3">Description</a>
    </li>
  </ul>
  {{ tab }} //expression get evaluated and output at '1' 2' or '3' depending on the tab you click
</section>

//using ng-show, you can tell angular to display content when a ng-click value is reached
<div class="panel" ng-show="tab === 1">
  <h4>Description</h4>
  <p>{{product.description}}</p>
</div>

// In production, you'd take all this ng logic and put it into a controller
  app.controller('PanelController', function(){
    
    // basically acts as ng-init, says tab starts at 1
    this.tab = 1; 

    // this piece is basically what ng-click was above
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    // replaces ng-class logic in html, also replaces ng-show logic for the panels (to detect which one is selected)
    // we check to see that the current tab is equal to this current tab we want to check, and then return that value
    this.isSelected = function(checkTab) {
      return this.tab === checktab;
    };

    // how to use a setTab method to set the tab property coming from the PanelController 
    // selectedTab variable sets the tabcontroller up for success
    this.setTab = function(selectedTab) {
      this.tab = selectedTab;
    };
  });

// with this controller, the HTML now looks like:
// ng-init is replaced by the ng-controller directive, and the firs tpiece of code in the ng-controller for panels sets the tab = 1
<section ng-controller="PanelController as panel">  
  <ul>
    // adds active class to each li when tab is clicked via controller
    <li ng-class="{ active: panel.isSelected(1) }">
      <a href ng-click="panel.selectTab(1)">Description</a>
    </li>
    <li ng-class="{ active: panel.isSelected(2) }">
      <a href ng-click="panel.selectTab(2)">Description</a>
    </li>
    <li ng-class="{ active: panel.isSelected(3) }">
      <a href ng-click="panel.selectTab(3)">Description</a>
    </li>
  </ul>

  // uses ng-show + controller method 'isSelected' show corresponding tab
  <div class="panel" ng-show="panel.isSelected(1)">
    <h4>Description</h4>
    <p>{{product.description}}</p>
  </div>
</section>

// use ng-src to grab the current-th image (considering the controller is alias as product)
<div class='gallery' ng-controller="GalleryController as gallery" ng-show="product.images.length">
  <img ng-src="{{product.images[gallery.current]}}" />
</div>

// a ng-controller where I check to see if the setCurrent directive has been set (by checking for null state)
  app.controller('GalleryController', function(){
    this.current = 0;
    
    // setCurrent method to accepts a value and assigns it to current via variable settingTheCurrent
    this.setCurrent = function(settingTheCurrent){

      // if there isn't a value (check for null), set current to 0
      if (settingTheCurrent !== null) {
          this.current = settingTheCurrent;
      } else {
        this.current = 0
      };
    };
  });


// #############################
// 08 - Forms and Models (ng-model directive)
// Take a simple form HTML

<form name="reviewForm">

  // live review with angular
  // you bind the review elements to the form elements with ng-model directive
  // this creates the two-way binding angular is known for
  // ng-model works with select lists, textarea, textfields
  <blockquote>
    <strong></strong>
    {{ review.body }}
    <cite>by: {{ review.author }}</cite>
  </blockquote>

  //form input
  // note how the ng-model instances correspond to the expressions
  <select ng-model="review.stars">
    <option value="1">1 star</option>
    <option value="2">2 star</option>
    <option value="3">3 star</option>
    <option value="4">4 star</option>
    <option value="5">5 star</option>
  </select>
  <textarea ng-model="review.body"></textarea>
  <label>br:</label>
  <input ng-model="review.author" type="email" />
  <input type="sumbit" value="Submit" />
</form>

// ng-model also works with checkboxes and radio buttons
<input ng-model="review.terms" type-"checkbox" />
<input ng-model="review.color" type="radio" value="Red" />


// #############################
// 09 - Building a Controller and using ng-submit
// We are going to connect our form to our controller by adding the controller alias to the expressions

// First, we initialize the controller and create an empty review object
app.controller("ReviewController", function(){
  this.review = {};
});

// Second, we add add the controller into the form and give it an alias of 'reviewCtrl'
// Third, we add 'reviewCtrl' to all the expression elements, so they connect into the controller properly
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl">
  <blockquote>
  <strong>Stars: {{ reviewCtrl.review.stars }}</strong>
  {{ reviewCtrl.review.body }}
  <cite>by: {{ reviewCtrl.review.author }}</cite>
  </blockquote>
</form>

// Fourth, we add in ng-submit to the form so it works!
// ng-submit uses the controller alias to call the addReview function, sending in the current form as variable 'product'
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)">
  <blockquote>
  <strong>Stars: {{ reviewCtrl.review.stars }}</strong>
  {{ reviewCtrl.review.body }}
  <cite>by: {{ reviewCtrl.review.author }}</cite>
  </blockquote>
</form>

// Fifth, we need to place the 'addReview' function into the controller
app.controller("ReviewController", function(){
  this.review = {};

  // 'push' literally pushes the contents of the product onto review's array
  this.addReview = function(product) {
    product.reviews.push(this.review);
    this.review = {}; //resets the form contents
  }
});


// #############################
// 10 - Form validations, ng-pristine, ng-valid
// First, turn off regular HTML form validations by adding 'novalidate' to the form tag and add mark fields as required
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)" novalidate>
  <textarea name="body" ng-model="reviewCtrl.review.body" required></textarea>
  <input name="author" ng-model="reviewCtrl.review.author" type="email" required>
  <select ng-model-"reviewCtrl.review.stars" required>
</form>

// Second, print out form contents to check their validity
// Angular gives us a little head start here with the $valid property - add it to the form name and $valid will check the form for us in real time
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)" novalidate>
  <textarea name="body" ng-model="reviewCtrl.review.body" required></textarea>
  <input name="author" ng-model="reviewCtrl.review.author" type="email" required>
  <select ng-model-"reviewCtrl.review.stars" required>

  <div>reviewForm is {{reviewForm.$valid}}</div> // how you add $valid into the mix
</form>

// Third, we add validation straight into the form submission process
// Simply add 'reviewForm.$valid' into the ng-submit parameter with '&&' operator
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewForm.$valid && reviewCtrl.addReview(product)" novalidate>

// Fourth, Angular auto-updates form element classes based on user input, goes through 3 stages (style accordingly to give user feedback)
  // Stage 1 : input has not been touched, ng-pristine and ng-invalid are put on the element
  <input name="author" class="ng-pristine ng-invalid">

  // Stage 2: ng-dirty replaces ng-pristine as the user types
  <input name="author" class="ng-dirty ng-invalid">  

  // Stage 3: ng-valid replaces ng-invalid as the user's entry validates
  <input name="author" class="ng-dirty ng-invalid">  

// How to add a timestamp to a submission, add a key/value pair of key 'createdOn' with value using 'Date' method, to the array
// For more info on how to use date in Angular, see this page: https://docs.angularjs.org/api/ng/filter/date
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };











