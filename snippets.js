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
var Revolutionary = 1776; 		// number
var CoinToss = true; 			// boolean

// Null and undefined are basically the same: both just hold a meaningless value in a variable
var FeelingPostBreakUp = null; 	// null
var GoodIndoorPlant; 			// undefined

// You can call 'typeof' to get the variable type
var WWIIDate = 1942;
alert (typeof WWIIDate); 		// returns "Number"

// You can also call 'isNaN' to determine if something is a number or not
var NumberOfBrainCells = 1.98e16;
console.log (isNaN (NumberOfBrainCells));

// Number variables can also be octal (base 8) or hexadecimal (base 16) but are generally decimal (base 10).
var HexThatNumber = 0xAB; 		// first digit = 0, second digit = x, third and fourth digits = 0-9 or A-F
var AverageGPA = 4.3; 			// floating point just happens when you add in a decimal (stored as string until needed
var BigAssNumber = 3.175e8; 	// basically 3.175 x 10^8



// ##################################################################
// ######################## String Variables ########################
// ##################################################################

var Greetings = "Ahola!"; // string can contain a whole mix of stuff
var ArchitecturalStyle = 'Art Deco'; // use single quotes, they work and no one will give a shit

// Escaping stuff is still pretty laborious ( \n = new line, \t = tab, \' = single quote \" = double quote)
var DeclarationOfIndependence = "\"We hold these truths to be self-evident, that all men are created equal, \n that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.\""



// ################################################################################
// ######################## Variable Navigation + Switches ########################
// ################################################################################

// .length is a method in JS
var BigMountain = "Denali";
console.log(BigMountain.length); // output of '6'

// Turn a Boolean into a String (.tostring is also a method)
var SunRisesInTheEast = true;
SunRisesInTheEast.toString();
console.log(typeof SunRisesInTheEast);

// Convert a number into a string - it justs prints the number as a string
var PillowsPerHousehold = 5.69;
console.log(PillowsPerHousehold.toString());

//Change it to a hexidecial (parenthesis value is radix, or the base number set you want to use)
var aGoodLengthVacation = 10;
console.log(aGoodLengthVacation.toString(16)); 

// parseInt() - takes a string and make it a number, as best it can (with radix mode)
var PurgatoryWouldBe = parseInt("1000 Long Mondays"); // will output '1000' because it chops off non number stuff
var PurgatoryWouldBe = parseInt("1000 Long Mondays", 16);  // will output '4096' because second parameter passed defines radix base number set

// parseFloat() - takes a string and makes it a number with a decminal (no radix mode)
var HowMuchYourMomWeighs = parseFloat("325.69 pounds. Good god damn son, that\'s one heavy woman."); // returns '325.69' - note how the function dropped characters after the first space
var HeightOfAndreTheGiant = parseFloat("I don't know, let me check google"); // returns 'NaN' - not a number.



// ##############################################################
// ######################## Type Casting ########################
// ##############################################################

// Boolean(parameter-here);
var Chinatown = Boolean("Jack Nicholson"); 		// returns 'true' because value had at least one character
var ApocalypseNow = Boolean("1979"); 			// returns 'true' because there was at least one number
var SmashingPumpkinsEP = Boolean("0"); 			// returns 'false' because there was no number 

// Number(parameter-here);
var GiantAirplaneModel = Number("A380"); 		// returns 'NaN' because it hits the A character before the number, invalidating the response
var FreedomTowerHeight = Number("1776"); 		// returns '1776' because it was already an integer
var DaysPerYear = Number("365.25"); 			// returns '365.25' - no problem with floating point
var SectionInSupportDoc = Number("1.32.4.1"); 	// returns 'NaN' - Number() can only handle one decimal place before going bust

// String(parameter-here); - very straightforward
var AnnoyingSong = String("99 Luftballons"); 	// returns '99 Luftballons' - easy schmeezy
var MeaningOfLife = String(null); 				// returns 'null' - null and undefined variables WILL work here as strings, they dont work for .toString();



// ###########################################################################
// ######################## Reference Types / Classes ########################
// ###########################################################################

var JoseCanseco = new ThePlayer();				// instantiates 'ThePlayer' object, but doesnt define it









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


