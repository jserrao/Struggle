Good Reference Stuff
========

Simple operators
```javascript
9                 // Integer
2.89e7            // Exponent number, equivalent to 2.89 x 10^8
'string'          // string
+                 // concatenation operator
+, -, *, \/       // arithmetic operators
()                // parenthesis
>, >=             // greater than | greater than or equal to
<, <=             // less than | less than or equal to
%                 // modulus (remainder)
=                 // single equal is an assignment operator
```

Complex operators
```javascript
!== ===           // Comparison operator (equal | not equal)
if ( 12 !== myVariable.height ) {  
  // do something
}           

&& ||             // Logical comparison operator (and | or)
if ( myVariable.height === 12 && myVariable.width === 36 ) {  
  // do something
}     

(x ? y : z)       // ternary
(myVariable ? 12 : 13)
```

Escape Characters in JS:
```javascript
\n                // Newline
\t                // Tab
\b                // Backspace
\r                // Carriage return
\f                // Formfeed
\\                // Backslash
\’                // Single quote
\”                // Double quote
```

Reserved Words, dont name stuff with these in JS:
```javascript
break else new var case finally return void catch for switch while continue function this with default
if throw delete in try do instanceof typeof abstract enum int short boolean export interface static
byte extends long super char final native synchronized class float package throws const goto private
transient debugger implements protected volatile double import public
```

Statements:

```javascript
// Conditional statements
if statement
switch statement

// Looping statements
while statement
for statement
do statement

// Disruptive statements
expression statement
disruptive statement
try statement

// Falsy inputs, all else returns 'true'
false, the keyword (but the string 'false' will return true)
null
undefined
empty string ''
0
NaN
```

Methods, as I come to them:
```javascript
// Append all JS methods like this: variable.method();
.length;                      // outputs length of string
.toString();	                // converts to a string
.typeOf(variableName);				// gets type of JS variable (integer, string, etc)
.valueOf();                   // returns the value of a number object
.toExponential(#);            // makes a number into 4e8 (argument is the number of decimal places)
.toFixed(#);								  // adds decimal places to a floating point number object (argument is the number of decimal places)
```

jQuery Attributes and Methods
```javascript
.keyup();									// watches how many times you release a key on the keyboard, ie: .keyup(updateCountdown); watches updateCountdown function
.load();									// tells you when a certain site element has fully loaded (been inconsisent in use, might be deprecated now)
.prop();									// enable/disable interactive form elements, ie: .prop('disabled', true); will disable the form element it is attached to
.replaceWith();								// replaces a piece of content in a string, ie: $("#yourmom").replaceWith("div id='no-it's-your-dad'");
.val();										// returns a string from a field when appended to an ID, usually a textbox
```

> Much of this info is from [Professional Javascript for Web Developers by Nicholas C. Zakas](http://it-ebooks.info/book/483/)
