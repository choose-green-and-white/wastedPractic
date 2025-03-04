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


function Vehicle(mark, model){
    this.mark = mark
    this.model = model
    
}

Vehicle.prototype.start = function() {
    console.log(`Двигатель запущен`)
}

function Car(mark, model){
    Vehicle.call(this, mark, model)
    this.drive = function () {
        console.log(`Машина ${mark} ${model} поехала`)
    }
}

Car.prototype = Object.create(Vehicle.prototype)
const car = new Car('Toyota', 'Camry')
car.start()
car.drive()
console.log(car.__proto__)