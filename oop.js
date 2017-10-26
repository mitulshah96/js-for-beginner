function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}

var salva=createNewPerson('Mituls');
salva.name
//salva.greeting()
//console.log(salva.name)

function Person(name){
  this.name = name;
  this.greeting = function(){
    console.log('Hiii'+this.name)
  };
}

var person1=new Person('Vijay');
var person2=new Person('Manoj');
//Object() constructor
var person3=new Object();
var person4=new Object({
  name:'Lol'
})
//Using the create() method
var person5=Object.create(person4)
person5.lastname='shah'
console.log(person4)
console.log(person5)
//console.log(person4)
//console.log(person3);
//person1.name
//person1.greeting()
//console.log(person1.name)
//console.log(person1);
