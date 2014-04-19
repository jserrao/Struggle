// JS Snippets, Basic Syntax



// ###########################################################
// ######################## Variables ########################
// ###########################################################

// Initialize a variable, it automatically gets typed as a string
var color = "red";

// Initialize multiple variables with one declaration (separate with comma)
var color = "red", animal = "turtle";

// You can intialize different variable types (string and integer) in one line
var color = "blue", daysinaweek = "7";

// Variables can type switch, but you dont want to do this apparently
var color = "blue";
color = "17";

// Variables must start with a letter, underscore (_) or dollar sign ($) - any alphanumerics are OK after that.
var vegetable = "eggplant";
var _veggie = "brocolli";
var $veg = "arugala";

// Use camelCaseNotation (first letter of first word is small) or PascalNotation (first letter of every word is big) for variables
var theDarkSideOfTheMoon = "A Damn Fine Album"; // camelCase
var TheFourthOfJuly = "Soundgarden's Darkest Song" // Pascal

// You can define a variable on the fly - DONT DO THIS!
VeggieSalad = vegetable + " lettuce"; 
alert (VeggieSalad); //will print "eggplant lettuce"



// ##################################################################
// ######################## Number Variables ########################
// ##################################################################

// Five types of variables are always primative variables - stored in the quick memory stack
var Grunge = "Alice in Chains"; // string
var Revolutionary = 1776; // number
var CoinToss = true; // boolean

// Null and undefined are basically the same: both just hold a meaningless value in a variable
var FeelingPostBreakUp = null; // null
var GoodIndoorPlant; // undefined

// You can call 'typeof' to get the variable type
var WWIIDate = 1942;
alert (typeof WWIIDate); // returns "Number"

// You can also call 'isNaN' to determine if something is a number or not
var NumberOfBrainCells = 1.98e16;
console.log (isNaN (NumberOfBrainCells));

// Number variables can also be octal (base 8) or hexadecimal (base 16) but are generally decimal (base 10).
var HexThatNumber = 0xAB; // first digit = 0, second digit = x, third and fourth digits = 0-9 or A-F
var AverageGPA = 4.3; // floating point just happens when you add in a decimal (stored as string until needed
var BigAssNumber = 3.175e8; // basically 3.175 x 10^8



// ##################################################################
// ######################## String Variables ########################
// ##################################################################

var Greetings = "Ahola!"; // string can contain a whole mix of stuff
var ArchitecturalStyle = 'Art Deco'; // use single quotes, they work and no one will give a shit

// Escaping stuff is still pretty laborious ( \n = new line, \t = tab, \' = single quote \" = double quote)
var DeclarationOfIndependence = "\"We hold these truths to be self-evident, that all men are created equal, \n that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.\""



//####################################################################################

// #################################################################
// ######################## DOM Transversal ########################
// #################################################################

// The DOM is really just your HTML layout tree  made accessible by a W3C API all the browser big dogs have adopted

//Get's an element by it's ID
document.getElementById('ID-goes-here');

/* Multi-line comments look
exactly like CSS */
// Single line comments are like C++ and Java

//Braces { } mark a code block 


