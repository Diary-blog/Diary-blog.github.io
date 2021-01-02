---
title: 🧚 JavaScript Object (Basic)
date: 2021-01-02
update: 2021-01-02
tags:
  - Javascript
  - Object
  - mystory
keywords: mystory, gatsby, blog, Javascript, Object, explanation
read: 3m
cover: ./img/js1.png
---

## Objects in JavaScript

JavaScript object is an entity having state and behavior  
(properties and method).  
JavaScript is an object-based language.  
Everything is an object in JavaScript

This is in the form of "key : value" pair

```js
var coffee = {
  name: "mocha",
  size:  "Tall",
  hotcold: "cold"
}
console.log(`${coffee.name}`);
```

***

## Objects can be created in 3 different ways

1. By object literal  
2. By creating instance of Object directly  
3. By using an object constructor  

***

### [1] Javascript Object by object literal
리터럴 배열을 이용한 오브젝트 생성
```js
coffee = {
  id: 1,
  name: "mocha",
  price: 6000
}
console.log(coffee.id + " " + coffee.name + " " coffee.price);
```

***

### [2] By creating instance of Object
The syntax of creating object directly is  
new 생성자를 이용한 오브젝트 생성
```js
var coffee = new Object();
coffee.id = 1;
coffee.name = "mocha";
coffee.price = 6000;

console.log(coffee.id + " " + coffee.name + " " coffee.price);
```

***

### [3] Using constructor
In this you need to create function with arguments.  
Each argument value can be assigned in the current object by using this keyword.  
함수를 선언하여 new생성자로 생성한 오브젝트에 인자를 전달
```js
function coffee(id, name, price) {
this.id = id;
this.name = name;
this.price = price;
}
c = new coffee(1, "mocha", 6000);
console.log(c.id + " " + c.name + " " + c.price);
```


