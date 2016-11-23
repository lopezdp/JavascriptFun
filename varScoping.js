/**
1. Explain the concept of scoping and its associated rules.
Answer:
**/

//Globally Scoped Variables
// Variables with a global scope are variables
// that are defined outside the scope of a function
// which are then "Global" to the entire program
// and not specific to any one module
// --> Multiple Scoping is when multiple functions use the same global variables

var a = 1; //Globally scoped variable that is accessible to every function in the program
function globalFoo()
{
	alert(a); // function accesses the variable that is defined outside the scope of the function
}

globalFoo();

//Locally Scoped Variables
// Variables with a local scope are variables
// that are defined inside a function and are only
// accessible to the function in which it has been defined
// a locally scoped variable can be defined inside the
// body of the function that it is local to or it can
// be defined as a parameter to the function in which
// the data needed by the function will be passed as an 
// argument to that function as a locally scoped variable

function localFoo()
{
	b = 1;
	alert(b);
}

localFoo();

// OR

function localBar(b)
{
	alert(b);
}

localBar();

//Nested Scoping 
// When a function is executed inside another function
// the nested function will create a nested scope inside
// the outer function that will be local to the nested
// function. 
//   The nested function will have access to the scope 
//   of the outside function, and the outside function will
//   have access to the globally scoped variables. The 
//   outside function will not be able to access the scope
//   of the nested function. This will lead into the concept
//   of closure.

function nestedFoo(c)
{
	alert(c + a);

	var myFunc = function(d)
	{
		// or var d = 3 without the parameter;
		var e = d + c;
		alert(e);
	}
	myFunc(3);
}

nestedFoo(2);

//Closure
// the concept of Closure helps my understanding of the 
// javascript prototype-based object model using the JS
// dynamic inheritance features.
//   Closure is enabled by the scoping rules that govern
//   how the JS interpreter resolves nested scoping conflicts.
//   dynamic inheritance allows for accessor methods to be
//   loosely defined by using the nested scope of the nested
//   functions. since the outer function does not have access
//   to the scope of the nested function, the nested function
//   can use the local scope of its variables to dynamically set
//   attributes for the object being created dynamically by accessing 
//   the variable in the outside scope. 

var createTrade = function(symbol){
  // this is the outside scope that can be accessed from the nested scope
  var closingPrice;

  // this is the outside function accessing the global scope
  a++;
  console.log(a);
  
  return{
    
    setSymbol: function(newSymbol){
      symbol = newSymbol;
    },
    
    getSymbol: function(){
      console.log(symbol);
      //this will access the outside scope from inside the nested scope
      return symbol;
    },
    
    getClosingPrice: function(){
      console.log(closingPrice);
      return closingPrice;
    },
    
    setClosingPrice: function(newClosingPrice){
    	// this conditions tests the nested scope and accesses the outside scope
    	if((typeof (newClosingPrice === 'number')) && (newClosingPrice > 0)){
        closingPrice = newClosingPrice;
      }
    }
  }
}
var trade = createTrade("aapl");
trade.getSymbol(); // aapl
trade.setSymbol("tsla");
trade.setClosingPrice(275.5);
trade.getSymbol(); // tsla
trade.getClosingPrice(); // 275.50

//Lexical this
// Closure enables and leads into the efficacy of the
// Lexical this scope in the js Object Model. In the
// outside function the value of this can now be 
// assigned to a variable the can be Closed.

function Person(){
	// this referse to the dynamically created object using the Person() constructor
	var self = this;
	// with self being assigned the value of this, self.age initializes an attribute
	// with an age of zero
	self.age = 0;

	setInterval(function growUp(){
		// this self, which has been assigned the value of this that is referred to by the outside scope
		// continues to refer to the object's attribute referred to by age
		self.age++;
	}, 1000);
}

/**
2. Explain the concept of Javascript's "Hoisting" mechanism.
Answer:
**/

// Hoisting refers to the mechanism built into JS that literally 
// translates into the JS interpreter's ability to litterally
// "lift" JS statements into the correct scope position so that
// the interpreter can execute the code. This has the benefit of
// allowing for the flexible writing of the JS syntax.

function fooHoist(){
	return b;
	var b = 7;
}

foo(); // undefined

// in the example above the bar b is declared after the return
// statement. the JS interpreter will execute this routine without
// an Exception because of the built in "Hoisting" mechanism.
// The interpreter will "Hoist" the variable declaration to the
// top of the function scope in order to compile the module
// without an exception. in the above example however, the 
// valuse of the variable will not be assigned and the function
// will return an UNDEFINED value.

// The same holds true for functions assigned to a variable, only the
// variable will be hoisted, however, with a function declaration,
// the full function will be hoisted.

function myFunction() {
	var bar = function(){
		return 'World';
	};

	function foo(){
		return 'fooed';
	}

	var inScope = 5;
}

// from the above example, foo() will be hoisted to the top,
// followed by the var bar and inScope as shown below:

function myFunction() {
	function foo() {
		return 'fooed';
	}

	var bar;
	var inScope;

	bar = function() {
		return 'World';
	}

	inScope = 5;
}

// i understand the practicality of the second example but not the first.
// it seems like the hoisting mechanism is simply a way to allow for 
// a mor flexible way to write JS code in order to avoid many
// exceptions as you would have in C++, for example, if you dont
// write the function prototypes correctly before the main() function.
// hoisting is simply a way for the interpreter to declare variables
// inside of the correct scope in order to execute the routines with
// the properly initialized values as the hoisted code will never be
// seen, but rather it will happen in the background by the interpreter
// to avoid the exceptions cause by not declaring a variable in an
// effective sequence as would be needed by the computer in order
// to interpret the code correctly...

/**
3. What is meant by, "Functions are first-class Objects in JS."
Answer:
**/

/**

I really like this question because it really ties in nicely how JS uses
dynamic inheritance in its prototype-based object model with functions.
The concept is not that intuitive until you realize that functions in JS
are first-class objects!!!

"Functions in Javascript are first-class Objects because they have
properties and methods just like any other object." - Moz Docs

Since functions can be called and objects cannot be called, it fits in
nicely that the syntax of an object requires that it be declared
using the function's prototype-based paramaters to set the function 
attributes using the methods of the function object to access them.

An object can be created using a function but it cannot be called where
a function can be using arguments as parameters.

By treating functions as first-class objects it enables a function to 
be treated as a variable and as its own data type which can be passed
as arguments to other functions, they can be returned as values from
other functions, and they can be assigned to variables and/or 
stored inside of data structures.
**/




