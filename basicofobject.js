//creating object in 2 ways 
//1 using constructor function
//2 object literal


//constructor function
function myObject1(){
    this.iAm = 'an contructor object';
    this.whatAmI = function(){
        console.log('I am ' + this.iAm);
    };
};

function myObject2(what){
    this.iAm = what;
    this.whatAmI = function(language){
        console.log('I am ' + this.iAm + ' of the ' + language + ' language');
    };
};


//Literal version
var myObject={
  iam:"an literal Object",
  whatAmI:function(){
  console.log('I am '+this.iam); 
}}

//calling object literal
console.log(myObject.whatAmI());

//Adding properties using dot notations
myObject.middlename='jayesh';
console.log(myObject)


//calling constructor function
var  obj1=new myObject1();
obj1.whatAmI()

//calling constructor function with arguments
var obj2=new myObject2('an object')
obj2.whatAmI('javascript');
