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


function Animal(name, species) {
    this.name = name
    this.species = species
    this.makeSound = function(){
        console.log('звук производимый животным')
    }
}

function Dog(name, species){
    Animal.call(this, name, species)
    this.fetch = function(){
        console.log(`Собака ${name} принесла палку`)
    }
}

const dog = new Dog('Rex', 'БУЛЬДОГ')
dog.makeSound()
dog.fetch()

