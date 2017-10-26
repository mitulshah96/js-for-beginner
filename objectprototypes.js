var a={
  name:'Mitul'
}
//console.log(a);
//console.log(Object.getPrototypeOf(a))

function Person(name,age){
  this.name=name;
  this.age=age
  console.log('Hii ' +this.name)
}
//when we create a constructor.The constructor prototype is accessable to all
//object that is defined by all the Person()

var person1 = new Person('Mitul',20);
console.log(person1);
//create() actually does is to create a new object
//from a specified prototype object. Here, person2 is being created
//using person1 as a prototype object.
var person2=Object.create(person1)
console.log(person2)
//var person4=new person1.constructor('Mitul',20)

//The constructor property has an object instance and you want 
//to return the name of the constructor it is an instance of, 
console.log(person1.constructor.name);


//Modifying prototypes adding a function in the  existinf class
Person.prototype.farewell= function(){
  console.log(this.name+' has left')
}
person1.farewell()

Person.prototype.fullname='Bob smirth'

console.log(Person);