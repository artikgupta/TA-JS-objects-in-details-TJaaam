`If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object

let title ="Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex =1;

function isAnswerCorrect(i){
return corretAnswerIndex === i;
}

function getCorrectAnswer(){
return options[correctAnswerIndex]
}

- Organize using object

let info = {
title:"Where is the capital of Jordan",
options:["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
correctAnswerIndex:1,

function isAnswerCorrect(i){
return corretAnswerIndex === i;
}

function getCorrectAnswer(){
return options[isAnswerCorrect]
}

}

- Use a function to create object

function QuizApp(){

let obj = object.create(methods)

obj.title = title;
obj.options = options;
obj.correctAnswerIndex = index;
return obj
}

- Convert the function to use `this` keyword

function QuizApp(title, options,correctAnswerIndex ){

let obj ={
title:title,
options:options,
correctAnswerIndex:correctAnswerIndex,
isAnswerCorrect: function(i) {
return this.corretAnswerIndex === i;
},
getCorrectAnswer: function(){
return this.options[this.correctAnswerIndex];
},

}
return obj
}

let app = QuizApp(title, options, correctAnswerIndex)

- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
};
```
