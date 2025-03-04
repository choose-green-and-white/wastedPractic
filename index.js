function Person(name, age, gender) {
  this.nane = name;
  this.age = age;
  this.gender = gender;
  this.greeting = function(){
    console.log(`Привет, меня зовут ${name} и мне ${age} лет`)
  }
}
 
const person = new Person ('John', 25, 'male')
person.greeting()