# Введение в прототипы

Основная концепция прототипа в JavaScript заключается в том, что один объект может наследовать свойства и методы от другого.
Давай разберем это на практике.

## Release 0
- Создай функцию-конструктор `Person`, которая принимает аргументы `name`, `age` и `gender`
- Добавь метод `greeting`, который выводит на экран приветствие вида `Привет, меня зовут [name] и мне [age] лет`
- Создай экземпляр объекта `person` с именем "John", возрастом 25 лет и мужским полом
- Вызови метод `greeting` для объекта `person`

## Release 1
- Создай функцию-конструктор `Animal`, которая принимает аргументы `name` и `species`
- Добавь метод `makeSound`, который выводит на экран звук, производимый животным
- Создай функцию-конструктор `Dog`, которая наследует свойства и методы от `Animal`
- Добавь метод `fetch`, который выводит на экран `Собака [name] принесла палку`
- Создай экземпляр объекта `dog` с именем "Rex" и породой "бульдог"
- Вызови метод `makeSound` и `fetch` для объекта `dog`

## Release 2
- Создай функцию-конструктор `Vehicle`, которая принимает аргументы `mark` и `model`
- Добавь метод `start`, который выводит на экран сообщение `Двигатель запущен`
- Создай функцию-конструктор `Car`, которая наследует свойства и методы от `Vehicle`
- Добавь метод `drive`, который выводит на экран сообщение `Машина [mark] [model] поехала`
- Создай экземпляр объекта `car` с маркой "Toyota" и моделью "Camry"
- Вызови методы `start` и `drive` для объекта `car`
