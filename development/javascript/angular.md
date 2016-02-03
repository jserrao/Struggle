Angular
=========

### Basic structure of an Angular app

* Directives (Marker on HTML that tells angular to run some JS)
```HTML 

<html ng-app="gemStore">
```

* Modules 
```javascript
// Modules are where you put the application code
// 'Store' is the application name
// Array is where you store dependencies
var app = angular.module('store', []);

```

* Expressions
```javascript
// You can put cool dynamic values straight into HTML when you attach the ng-app directive to the HTML tag
// Renders as 'I am 10'
<p>I am {{4 + 6}}</p>
<p>{{ 'Christopher Walken ' + '*REALLY*' + ' freaks me out.' }}</p>

* Controllers
```javascript
// Controller define app behavior with functions and values

(funtion(){
	var app = angular.module('store', []);

	// code stored in the anonymous function is what will be executed when the controller is called
	app.controller('StoreController', function(){
		// 'product' is a property of the controller
		this.product = gem;

	});

	// random variable
	var gem = {
		name: 'Dodechedron',
		price: 2.95,
		description: '. . .',
	}
})();





















