//coercion example
a="42"
b=42

a==b true //loose equal JavaScript will convert the left-hand side "42" to its number equivalent 42.It only check the value
a===b false //strict-equals it checks value and types

b===Number(a) true //Number(..) (a built-in function) as shown is an explicit coercion 


//TOP Level global Scope

function foo(){
a=1;  //`a` not formally declared
}
foo()
a; // 1 -- oops, auto global variable :(

// "fall through"
switch (a) {
	case 2:   // If you omit break from a case, and that case matches or runs, execution will continue with the next case's statements regardless of that case matching. 
	case 10:
		// some cool stuff
		break;
	case 42:
		// other stuff
		break;
	default:
		// fallback
}

//ternary operator
var a = 42;

var b = (a > 41) ? "hello" : "world";

// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }


//Strict-mode
"use strict";

function foo() {
	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is strict mode

function foo() {
	"use strict";

	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is not strict mode





//One key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration from omitting the var:



function foo() {
	"use strict";	// turn on strict mode
	a = 1;			// `var` missing, ReferenceError
}

foo();



//function as a value
function foo(){

}

//Though it may not seem obvious from that syntax, foo is basically just a variable in the outer enclosing scope that's given
//dd a reference to the function being declared. That is, the function itself is a value, just like 42 or [1,2,3] would be.


var foo = function() {
	// ..
};
// function expression assigned to the foo variable is called anonymous because it has no name.




//Immediately Invoked function exporession

(function IIFE(){
	console.log("Hello")
})()


//closure
function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}
//The reference to the inner add(..) function that gets returned with each call to the outer makeAdder(..) 
//is able to remember whatever x value was passed in to makeAdder(..).

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );		// 4  <-- 1 + 3
plusOne( 41 );		// 42 <-- 1 + 41

plusTen( 13 );		// 23 <-- 10 + 13

//When we call makeAdder(1), we get back a reference to its inner add(..) that remembers x as 1. We call this function reference plusOne(..).
//When we call makeAdder(10), we get back another reference to its inner add(..) that remembers x as 10. We call this function reference plusTen(..).
//When we call plusOne(3), it adds 3 (its inner y) to the 1 (remembered by x), and we get 4 as the result.
//When we call plusTen(13), it adds 13 (its inner y) to the 10 (remembered by x), and we get 23 as the result.


//The JS engine compiles your code right before (and sometimes during!) execution. So we use some deeper understanding of the compiler's approach 
//to our code to understand how it finds and deals with variable and function declarations. Along the way, we see the typical metaphor for JS variable scope management, "Hoisting."



