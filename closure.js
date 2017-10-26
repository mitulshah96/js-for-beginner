function init(){
  var name='Mitul';
  function displayName(){
  console.log(name);   
  }
  displayName()
}

init()
//This is an example of lexical scoping,which describes how a
// parser resolves variable names when functions are nested.

function makeFunc() {
  var name = 'Mozilla';
  
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// A closure is the combination of a function and the lexical environment 
//within which that function was declared. This environment consists of any 
//local variables that were in-scope at the time the closure was created. 
//In this case, myFunc is a reference to the instance of the function displayName
//created when makeFunc is run. The instance of displayName maintains
//a reference to its lexical environment, within which the variable name exists. 
//For this reason, when myFunc is invoked, the variable name
//remains available for use and "Mozilla" is passed to alert.

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
//Closures are useful because they let you associate some data
//(the lexical environment) with a function that operates on that data.


var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};


var counter1=makeCounter();
var counter2=makeCounter();
console.log(counter1.value());
counter1.increment();
counter1.increment();
console.log(counter1.value())
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value());









