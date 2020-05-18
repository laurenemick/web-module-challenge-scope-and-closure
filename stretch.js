See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you 
learned today. When you're ready for answers, view an explanation [here]
(https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

2. Write a function that would allow you to do this using a closure. 
(This is another interview question we've seen before - when you're ready for answers, 
view an explanation [here]
(https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

function createBase(num){
    return funtion
}

var addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27


3. Research the differences between functional programming and object oriented programming.
Then, describe the pros and cons of functional programming vs object-oriented programming. 
This is a common interview question 

Functional programming - data cannot be stored in objects and it can only be transformed 
by creating functions. 

Object-oriented programming - data is stored in objects.

OOP Pros:
— Objects and methods are very readable and understandable.
— OOP utilizes an imperative style, in which code reads like a straight-forward set of instructions 
as a computer would read it.
OOP Cons:
— OOP commonly depends upon shareable state. The unfortunate result of so many objects and methods 
existing within the same state and being accessed in an entirely undetermined order can lead the 
pre-discussed concept of “race conditions”.

FP Pros:
— Utilizing pure functions, leads to reliable functions with no side effects that accomplish and 
return exactly what you expect them to.
— FP utilizes a more declarative style, which focuses more on what to do and less about how it’s 
being done. This places the emphasis on performance and optimization, leaving the door to refactor 
without completely reworking your code.
FP Cons:
— Functional programming is a newer paradigm. It’s much easier to find documentation and information 
on the OOP approach.
— Similar to one of OOP’s strengths, functional programming can lack readability at times. Sometimes 
functions can become very verbose and become difficult to follow comparatively to the object-oriented 
style.

Source: https://medium.com/@darrickmckirnan/object-oriented-programming-oop-functional-programming-what-are-they-the-pros-and-cons-11f98a971e38