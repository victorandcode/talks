/*
 Create an arrow function that receives a single object as a parameter:
 To solve this exercise you must use the following features from ES6:
 - To read the properties from the function parameter -> Object destructuring
 - For the first line of output -> String templates
 - Assign a default value of 'The Learning Inc' to the-> Default parameters

 The function should print the following (each line is a console.log):
    We present the book The joy of cooking by Quentin Fisher. The tags of this book are:
    vegan
    no gluten
    milenial
    easy
    and it was produced by The Learning Inc
*/

const printRecipeBook; //TODO: Create this function

printRecipeBook({
    title: 'The joy of cooking',
    author: 'Quentin Fisher',
    tags: ['vegan', 'no gluten', 'milenial', 'easy'],
    producer: 'The Learning Inc',
});
