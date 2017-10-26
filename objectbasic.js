
var person = {
  1:'abc',
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
//person['bio']();


//bracket notation
console.log(person['1'])

//setting object notation

person.age = 45;

//function

var p = {
  id : 1,
  name : {
    first : "Mitul",
    last : "Shah"
  },
  age : 21

}
p['name']['middle'] = "Middle Name Of Mitul";
// console.log(p['name']['last']);

// console.log(p);

p.greetings = function () { console.log("Hi" + this.name.first); }
console.log(p);
p.greetings();
