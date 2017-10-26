function Person(name,age,gender){
  this.name=name;
  this.age=age;
  this.gender=gender;
};

var person1=new Person('Mitul',20,'Male')


Person.prototype.greeting=function(){
  console.log('Hii'+this.name);
}

person1.greeting();
console.log(Person);

function Teacher(name, age, gender, subject) {
//call function basically allows you to call a function 
//  defined somewhere else, but in the current context  
  Person.call(this,name, age, gender);
  this.subject=subject;
  Teacher.prototype = Person.prototype
}
Teacher.prototype.some=function(){
}

var teacher1=new Teacher('Mitul',20,'maths','JavaScript')
console.log(teacher1)
console.log(person1)
console.log(Person.prototype);
console.log(Teacher);
console.log(teacher1)
console.log(person1)