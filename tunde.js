// 1. output
// alert("welcome to Tech365");
// alert("this is a pop up");

// document.write("Hello world" + "</br>");
// document.write(2+4);

// console.log("Hello world");
// console.log(5+4);

// input

// prompt("How old are you?");

// 2. variable
// var x = 5;
// let firstName = "John";
// console.log(firstName)
// var x = 7;
// firstName = "Wale";
// console.log(firstName );

// const pi = 3.14;
// pi = 400;

// rules for naming variables
//1. do not start with a number
// let 1stperson = "wale";
// let 2numbers = 2+ 2;

// let firstNumber = 5;
// let twoNumber = 2 + 5;
//2. variable cannot contain space
// howAreYouDoing = 5
// doubleTheNumber = 10;

//3. cannot use reserved words as variable name
//NB: reserved words are words with predefined meaning
//eg. let, const, class, document etc

//4. use meaningful words as variable name
// let myFirstName = "wale";

// 5. variable is case sensitive

// 3. data types - what type of data we are storing or accessing

// strings - are sequence of characters denoted by '' or ""
// let address = "70c Allen Avenue, Ikeja, Lagos"
// let data = "123456789"
// console.log(typeof address)
// console.log(typeof x)
// console.log("wale's book")
// console.log('"I am hungry". said wale')

// string properties
// console.log(address.length)

// indexing a string
// console.log(address[2]);
// console.log(address[29]);
// console.log(address[address.length - 1]);

// slicing
// console.log(address.slice(0,3));
// console.log(address.slice(18,23));

// string methods - functions you can perform on strings
// console.log(address.replace("Lagos","Dubai"));
// console.log(address.concat(data));
// console.log(address.indexOf("Ikeja"));
// console.log(address.lastIndexOf("A"));
// console.log(address.indexOf("A"));
// console.log(address.includes("A"));
// console.log(address.toUpperCase());
// console.log(address.slice(0,18) + address.slice(18,23).toUpperCase() + address.slice(23));
// console.log(address.startsWith('W'));
// console.log(address.charAt(1));
// console.log(address.search("Ikeja"))
// console.log(address.split(" "));
// console.log(address.substring(18,23));

// let letter = ["a", "b", "c"]
// console.log(letter.join(""));

// Assignment
// =======

// let words = "JavaScript is simple"

// 1. change the string above to "JavaScript is Easy" and show it in the console.
// 2. Find out how many characters are in words above and print it to the console
// 3. bring out "Script" from the above words and show it in the console
// 4. what are the ways to declare variables and the differences between them?
// 5. What are the ways to identify a string?
// 6. How do I know the position of "s" in simple from the words above?
// 7. what is the difference between java and javascript (you are allowed to research)?
// 8. create a program that gets 3 numbers from users and multiplies the 3 numbers together and shows the answer in the console

// console.log(words.replace("simple","easy"));;
// console.log(words.length);
// console.log(words.slice(4,10));
// console.log(words.substring(4,10));
// console.log(words.lastIndexOf("s"));
// console.log(words.indexOf("simple"));

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// let num3 = prompt("Enter third number");
// console.log(num1 * num2 * num3);

// array - for storing multiple values in a variable (mutable)
// let colors = ["red", "blue", "green"]
// let numbers = [1, 2, 3, 4, 5]
// console.log(colors.length);

//indexing an array
// console.log(colors.slice(2,3));
// console.log(colors[2]);

// slicing array
// console.log(colors.slice(1,3));
// console.log(typeof colors);

// colors.push("purple"); // add new item at the end
// console.log(colors);
// console.log(colors.join("-")); // join to convert array to string
// colors.pop(); // remove last item
// console.log(colors);
// colors.shift(); // remove first item
// console.log(colors);
// colors.unshift("yellow"); // add first item
// console.log(colors);
 // join two arrays
// console.log(colors.concat(numbers));
// console.log(colors);

// let info = colors.concat(numbers)
// console.log(info);

// colors.splice(0,2,"orange","pink"); // add item at a particular position
// console.log(colors);
// colors[0] = "black"; // change item at a particular position
// console.log(colors);
// colors.splice(1,1,"white"); // remove item at a particular position
// console.log(colors);
// console.log(colors.includes("white")); // check if item exist in an array
// console.log(colors.toString());
// colors.sort(); // sort the array
// console.log(colors);
// colors.reverse(); // reverse the array
// console.log(colors);

// demo = "abc";
// console.log(demo.slice(3,1));
// console.log(demo.substring(3,1));

// object - unordered key-value pairs (mutable)

// let person = {
//     "first Name": "wale",
//     lastName: "Olajumoke",
//     age: 20
// }
// console.log(person.age);
// console.log(person["age"]);
// console.log(person["first Name"]);
// person.email = "waleolajumoke@gmail.com"
// console.log(person);
// person["address"] = "Ikeja"
// console.log(person);
// person["first Name"] = "John";
// person.lastName = "Doe";
// console.log(person);

// delete person.address
// console.log(person);
// console.log("lastName" in person);

//Boolean - true or false
// let isLoading = true;
// isLoading = false

// number 
// let z = 5;
// let score = 17.25
// let pageView = 100_000_000;
// console.log(typeof score);
// console.log(typeof pageView);
// console.log(pageView);

// console.log(score.toFixed(1))
// console.log(score.toPrecision(2));


// undefined 
// let ag = undefined;
// console.log(ag);

// let result;
// console.log(result);

// null
// let balance = null;
// console.log(balance);
// balance = 500;
// console.log(balance);

// symbol
// let data1 = Symbol()
// data1 = Symbol("hello");
// console.log(typeof data1);
// console.log(data1);

// operators
// arithmetic operators +, -, /, , %, *
// console.log(2 ** 4); // raise to power
// console.log(10 % 3); // remainder after division
// console.log((10 / 3).toFixed(1)); // division
// console.log(2 + 2 * 2); // multiplication
//operator precedence (), **, /, *, , %,+, -,
// console.log(10 * 5 / 5);

// assignment operators =, +=, -=, =, /=, %=, *=
// let num1 = 5
// let num2 = 2
// num1 += num2 // num1 = num1 + num2;
// console.log(num1);

// num1 -= num2 // num1 = num1 - num2;
// console.log(num1);

// comparison operators ==, ===, !=, !==, >, <, >=, <=
// x = 6;
// console.log(x == 7);
// console.log(5 == '5');
// console.log('5');
// console.log(5 === '5');
// console.log(5 !== '5');
// console.log(5 > 6);
// console.log(5 < 6);

// logical operators &&, ||, !
// console.log(5 > 4 && 5 < 6);
// console.log(5 > 6 || 5 < 6);
// console.log(!(5 > 6 || 5 < 6));

// ternary operator
// condition ? true : false
// console.log(5 > 6 ? "it is greater" : "not greater");

// array and object Assignment
// =======
// 1. What are the 2 ways to index an object?
// 2. bring out Wale from the following code

// let 
// person = [
//   {
//     firstName: 'Lola',
//     gender: 'female',
//     age: 18,
//   },
//   {
//     firstName: 'Segun',
//     gender: 'male',
//     age: 19,
//   },
//   {
//     firstName: 'Wale',
//     gender: 'male',
//     age: 20,
//   },
// ];
// console.log(person[2]["firstName"]);


// 3. 
// let greeting = ["hi", "welcome", "to", "javascript"]
// change javascript to python
// and bring out "Welcome to python" without the comma, square bracket or quote
// greeting.splice(3,2,"Python")
// console.log(greeting);

// 4. 
// let message = "Welcome to Tech365"
// reverse the word stored in message to read "Tech365 to welcome"
// console.log(message.split(" ").reverse().join(" "));

// conditional statements

// let age = "18"
// if(age == 18){
//     console.log("You can vote");
// }else{
//     console.log("not eligible");
// }

// let yourName = prompt("Enter your username")
// let yourPassword = prompt("Enter your password")
// username = "Wale";
// password = "Olajumoke"
// if(username == yourName && password == yourPassword){
//     console.log("You are logged in");
// }else{
//     console.log("Invalid username or password");
// }

// nested if
// if(username == yourName){
//     if(password == yourPassword){
//         console.log("You are logged in");
//     }else{
//         console.log("Invalid password");
//     }
// }else{
//     console.log("Invalid username");
// }

// number = 0
// if(number > 0){
//     console.log("positive");
// }else if(number < 0){
//     console.log("negative");
// }else{
//     console.log("zero");
// }

// switch statement
// let grade = 5; 
// switch(grade){
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Average");
//         break;
//     case "D","E":
//         console.log("Poor");
//         break;
//     case "F":
//         console.log("Fail");
//         break;
//     default:
//         console.log("Invalid GRADE");
//         break;
// }

// loop - for iterating or repeating a task until certain condition is met

//while loop
// x = 2;  //initial value
// while (x <= 10){  // condition
//     console.log(x);  // action
//     x = x + 2;  // increment
// }

// x = 1;
// while( x <= 10){
//     if(x % 2 == 1){
//         console.log(x);
//     }
//     x = x + 1;

// }

// for loop
// ages = [1,2,3,4,5,6,7,8,9,10,25];
// for (let i = 0; i < ages.length; i++){
//     console.log(ages[i]);
// }

// for (i in ages){
//     if(ages[i] >= 20 && ages[i]  <= 30){
//         console.log(ages[i] );
//     }

//     }


// function - for writing reusable block of code
// function greet(){
//     console.log("Hello");
// }

// greet()
// function parameter

// function addNumbers(x,y){
//     return x + y;
// }
// console.log(addNumbers(5,2));
// console.log(addNumbers(3,9));
// 0802_####30
// atmCardNumber = prompt("Enter ATM Card number");
//extract first 4 numbers
// join it with 5 stars
// extract last 2 digit


// result = []
// for(i in atmCardNumber){
//     if(i <= 3){
//        result.push(atmCardNumber[i])
//     }
// }
// console.log(result.join("") + "***" + atmCardNumber[atmCardNumber.length-1]);

// function hideCardNumber(x){
//     return x.slice(0,4) + "***" + x.slice(9,12)
// }

// console.log(hideCardNumber(atmCardNumber));
// 08029704730


// assignment
// =================

// 1. create a program that displays a multiplication table
// eg. 2 x 1 = 2
//     2 x 2 = 4
// up to 2 x 12 = 24
// x = 1;
// while ( x <= 12){
//     console.log("2 x ", x, " = ", 2 * x);
//     x = x + 1;
// }

// for (y=1; y <= 12; y++){
//     console.log("2 x ", y, " = ", 2 * y);

// }

// NB: Do not write out the table one by one. Use loop.


// 2. create a program that finds the largest of 3 numbers

// num1 = 40
// num2 = 7
// num3 = 10

// if(num1 > num2 && num1 > num3){
//     console.log(num1, "is the largest");
// }else if (num2 > num1 && num2 > num3){
//     console.log(num2, "is the largest");
// }else{
//     console.log(num3, "is the largest");
// }

// 3.  create a program that take a score and show the grade using switch case:
// 90 - 100 ("Grade A")
// 70 - 89  ("Grade B")
// 50 - 69 ("Grade c")
// 30 - 49 ("Grade E")
// 0 - 29  ("Grade E")

// let scores = 50;
// switch (true){
//     case (scores >= 90 && scores <= 100):
//         console.log("Grade A");
//         break;
//     case (scores >= 70 && scores <= 89):
//         console.log("Grade B");
//         break;
//     case (scores >= 50 && scores <= 69):
//         console.log("Grade C");
//         break;
//     case (scores >= 30 && scores <= 49):
//         console.log("Grade E");
//         break;
//     case (scores >= 0 && scores <= 29):
//         console.log("Grade F");
//         break;
//     default:
//         console.log("Invalid score");
//         break;
// }

// so if I enter any number as score it show the corresponding grade

// 4. Create a program that accepts 2 numbers and an operator eg. 5, 6, +
// then perform an operation based on what the user enters eg 5 + 6
// if the user enters 2, 8, * it should return 2 * 8
// and show the answer in console

// let number1 = parseInt(prompt("Enter first number"));
// let operator = prompt("Enter operator");
// let number2 = parseInt(prompt("Enter second number"));

// console.log(eval(number1 + " " + operator + " " + number2));

// if(operator == "+"){
//     console.log(number1 + number2);
// }else if(operator == "-"){
//     console.log(number1 - number2);
// }else if(operator == "*"){
//     console.log(number1 * number2);
// }else if(operator == "/"){
//     console.log(number1 / number2);
// }else{
//     console.log("Invalid operator");

// }

// 5. create a program that checks if a word is polidrone
// ie. it is the same when you spell it backward
// eg. malam, ododo, 

// function    polidrone(x){
//     return x ==   x.split("").reverse().join("")
// }
// console.log(polidrone("madamr"));

// let word = prompt("Enter a word");
// if (word == word.split("").reverse().join("")){
//     console.log("It is polidrone");
// }else{
//     console.log("not polidrone");
// }

// // 6. 
// let word = [1,2,3,4,5,6,7,8,9]
// bring out only even numbers from the above AND sum them together

// total_sum = 0;
// for (let i in word){
//     if(word[i] % 2 == 0){
//         total_sum  = total_sum + word[i];
//     }
// }
// console.log(total_sum);


// 7. 
// let messages = ["I", "want", "to", "book" , "the", "training"]
// bring out only words that start with t

// for( let y in messages){
//     if(messages[y].startsWith("t")){
//         console.log(messages[y]);
//     }
// }

// for(let i in messages){
//     if(messages[i][0] == "t"){
//         console.log(messages[i]);
//     }
// }
// console.log(messages[1][0]);

// 8. create a guessing game. Create a number that is stored in a variable and let the user guess the number.
// If they guess correctly, tell them they are correct. if higher than the number tell them it is higher. if lower tell them their guess is lower.

// let guess = (Math.random() * 10).toFixed()
// console.log(guess);
// let number = parseInt(prompt("Guess a number between 1 to 10"));
// if (number == guess){
//     console.log("You are correct");
// }else if (number > guess){
//     console.log("It is higher");
// }else{
//     console.log("It is lower");
// }



// function addNumbers(x,y){
//     return x + y;
// }
// console.log(addNumbers(5,2));
// arrow function

// let demo = (x,y)=> x+ y;
// console.log(demo(4,5));

// higher order function
// map
// data = [1,2,3,4,5,6,7,8,9]
// console.log(data.map(x => x));

// filter
// console.log(data.filter(x => x % 2 == 0));

// let movies = ["titanic", "superman", "troy", "harry potter", "avengers", "the flash", "tradition"]

// let users = [2,8,5,2,6,8,4, 1]

// console.log(movies.filter(x=> x.startsWith("tr")));
// console.log(movies.filter(x=> x.slice(0,2) === "tr"));

// find
// console.log(users.find(x=> x === 1));
// reduce
// console.log(users.reduce((x,y)=> x + y));

// let customers = [{
//     name: 'ABC Inc',
//     credit: 100,
//     id: 1
// }, {
//     name: 'ACME Corp',
//     credit: 200,
//     id : 2
// }, {
//     name: 'IoT AG',
//     credit: 300,
//     id: 3
// }];

// console.log(customers.find(x => x.id == 2));

// ES6
// destructuring

// let staff = {
//     middleName: 'Wale',
//     lastName: 'Olajumoke',
//     age: 30,
// }

// console.log(staff.age);
// const {middleName, lastName, age} = staff;
// console.log(age);
// console.log(middleName);
// NB: Keys must be same for object

// const scores = [20, 10, 5]
// const [f, d, s] = scores;
// console.log(s);

// template literals
// mainName = "John";
// midName = "Doe";
// console.log("My name is " + mainName + " " + midName);
// console.log(`My name is ${mainName} ${midName}`);

// spread operator
// cart = ["bag", "shirt", "pants",  "hat"];
// newCart = [...cart, "shoes"];
// console.log(newCart);

// function sample(...y){
//     return y.reduce((x,y) => x + y);
// }
// console.log(sample(2,3,5,7));

// Assignment
// =====
// 1. 
// const students = [
//   { name: "Wale", grade: 10 },
//   { name: "Mary", grade: 15 },
//   { name: "John", grade: 19 },
//   { name: "Audu", grade: 9 },
// ];

// from the above, get all the names of the students
// console.log(students.map(({name}) => name));

// 2. Add all the score for students with grades 10 or above
// console.log(students.map(({grade}) => grade).filter(x => x >= 10).reduce((x,y) => x + y));

// destructuring and module assignment
// =======

// 3. 
// const user = {
//     id: 42,
//     is_loggedin: true
// }
//  console.log 42 using destructuring in the code above
// console.log(user.id);
// let {id, is_loggedin} = user;
// console.log(id);

// 4. Given the following object
// const person = {
//     firstName: "Wale",
//     lastName: "Ola",
//     age : 18
// }

// const {firstName, lastName} = person
// console.log(firstName + " " + lastName);

// create a function called fullname that returns the firstname and lastname inside the person object above. Using destructuring

// function fullName(){
//     let {firstName, lastName} = person;
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName());


// 5. 
// const myObj = {
//     x: 100,
//     y: 90,
//     a:50,
//     b:40,
//     c:80,
//     j: 222
// }
// const {x,y,a,b, ...wale} = myObj;
// console.log(wale);
// bring out a:50, b:40 and c:80 from the above

// 6. 
// const person = [100, "wale", "Ola", 90, 100, 80, "bola", 22]
// console.log(person.slice(2,5).reduce((x,y)=> x + y));

// console.log the sum of the numbers inside the person above
// console.log(person.filter(x => typeof x === "number").reduce((x,y) => x + y));

// // 7. 
//  firstStudents = ["James","John"]
// secondStudents = ["Mary","Linda"]
// merge firststudents and secondstudents array together

// console.log([...firstStudents, ...secondStudents]);
// console.log(firstStudents.concat(secondStudents));


// let brand = "Tech365";
// console.log(`${brand} is ${7 * 7} better than others`);
// 8. use template literals to display
// Tech365 is 7 * 7 times better than others

// DOM - Document Object Model
// console.log(document.getElementById("app"));

// const app = document.getElementById("app")
// app.style.backgroundColor = "yellow";
// app.style.padding = "20px";
// app.style.width = "100px";
// app.style.marginTop = "150px"

// const box  = document.getElementsByClassName("box")
// box[0].style.backgroundColor = "red";
// for(let i = 0; i < box.length; i++){
//     box[i].style.backgroundColor = "red";
//     box[i].style.padding = "20px";
//     box[i].style.width = "100px";
//     box[i].style.height = "100px";
//     box[i].style.margin = "5px";
// }

// for(i in box){
//     box[i].style.backgroundColor = "red";
//     box[i].style.padding = "20px";
//     box[i].style.width = "100px";
//     box[i].style.height = "100px";
//     box[i].style.margin = "5px";
//     box[i].style.display = "none";
// }

// document.body.style.backgroundColor = "yellow";
// const myQuery = document.querySelector("#app")
// const myQuery = document.querySelectorAll(".box");
// const  myTag = document.getElementsByTagName("div");
// myTag[0].style.backgroundColor = "red";
// myTag[0].style.padding = "20px";
// myQuery.style.backgroundColor = "red";
// myQuery.style.padding = "20px";
// console.log(myQuery);

// const myDiv = document.createElement("div");
// const myH1 = document.createElement("h1");
// myH1.innerHTML = "Welcome to Tech365"
// myH1.innerText = "Welcome to Tech365"
// document.body.appendChild(myH1);
// console.log(myH1.innerHTML);
// console.log(myH1.innerText);

// console.log(document.getElementById("app").innerText);

// let container = document.getElementById("container")
// container.lastElementChild.style.backgroundColor = "red";
// container.firstElementChild.nextElementSibling.style.backgroundColor = "red";

// Event means a thing that happens to an element when it is clicked, mouse over, page load etc

// const btn =  document.getElementById("btn");
// const content = document.getElementById("content");
// btn.addEventListener('click',()=>{
//     content.style.opacity = 0;
// }
// )

// Assignment
// 1. Create a counter with - 0 +
// each time i click + the number should increase by one. 
// If i click - the number should decrease by 1

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number");
// console.log(number, add, minus);

// count = 0;

// add.addEventListener('click',()=>  count < 10 && count >= 0 ? number.innerHTML = ++count : count)
// minus.addEventListener('click',()=>  count > 0 ?  number.innerHTML = --count : count)


// const on = document.getElementById("on");
// const off = document.getElementById("off");
// const bulb = document.getElementById("bulb");

// on.addEventListener('click',()=>{
//     bulb.innerHTML = '<img src="./on.jpeg" width="100px">'
// })

// off.addEventListener('click',()=>{
//     bulb.innerHTML = '<img src="./off.jpeg" width="100px">'
// })

// 2. Create a program that puts on and off the bulb


// 3. Create a program that changes the background color of the
// entire page each time i click the button

// let change = document.getElementById("color");
// color.addEventListener('click',changeColor)
// function changeColor(){
//     color.innerHTML = document.body.style.backgroundColor = "red";
// }

// Promise
// ASYNC await
// OOP - Object Oriented Programming
// user1 = {
//     name: "Wale",
//     age: 20,
//     greet: function(){
//         return "Hello";
//     }
// }
// console.log(user1.greet());

// class - a blueprint for creating objects
// class User{
//         name = "Wale";
//         age = 20;
// }

// const user1 = new User();
// console.log(user1.name);
// console.log(user1.age);

// const user2 = new User();
// console.log(user2.name);
// console.log(user2.age);


// class User{
//     constructor(name, age, total){
//         this.name = name;
//         this.age =age;
//         this.total = total;
//     }

//     greet(){
//         return "I am a user"
//     }
// }

// const user1 = new User("Wale", 20, 40);
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.total);
// console.log(user1.greet());

// const user2 = new User("Mary", 19, 100);
// console.log(user2.name);
// console.log(user2.age);
// console.log(user2.total);
// console.log(user2.greet());

// inheritance
// class Admin extends User{
//     constructor(name, age, total){
//         super(name, age, total);
//         this.id = 1
//     }

//     removeUser(){
//         return  "user is removed";
//     }

//     greet(){
//         return "I am an admin"
//     }
// }

// let admin1 = new Admin("Wale", 20, 40);
// console.log(admin1.id);
// console.log(admin1.removeUser());

// admin1.id = 5
// console.log(admin1.id);

// encapsulation - protect the data
// class Admin extends User{
//     #clearAll;
//     #id;
//     constructor(name, age, total, clearAll=true){
//         super(name, age, total);
//         this.id = 1
//         this.#clearAll = clearAll;
        
//     }

//     removeUser(){
//         return  "user is removed";
//     }


//     test(){
//         return this.#clearAll;
//     }

//     setId(){
//         this.#id = 10;
//     }

//     getId(){
//         return this.#id;
//     }
// }

// let admin1 = new Admin("Wale", 20, 40);
// console.log(admin1.id);
// console.log(admin1.removeUser());

// admin1.id = 5
// console.log(admin1.id);

// console.log(admin1.test());

// console.log(admin1.setId());
// console.log(admin1.getId());

// test  = [1,2,3]

// let test = new Array(1,2,3); 
// test.pop()
// console.log(test);

// class Student{
    // #totalScore;
//     constructor(name, totalScore){
//         this.name = name;
//         this._totalScore = totalScore;

//     }

//     setScore(totalScore){
//        this._totalScore = totalScore
//     }

//     getScore(){
//         return this._totalScore
//     }
// }
// const student1 = new Student("Wale", 40);

// student1.totalScore = 90
// console.log(student1.age);

// student1.setScore(100)
// console.log(student1.getScore());

// polymorphism - many forms 
// console.log(user1.greet());
// console.log(user2.greet());
// console.log(admin1.greet());

// module

// import {addNumbers} from './calculator.js'
// console.log(addNumbers(12,3));

// import * as wale  from './calculator.js';
// console.log(wale.addNumbers(12,3));
// console.log(wale.multiplyNumbers(12,3));




// people = {
//     name : "wale",
//     age: 15
// }

// people.age = 18;
// console.log(people);

// setInterval(function(){
//     console.log(3);
// }, 10000)
// console.log(1);
// console.log(2);

// const stock ={
//     shoe : 0,
//     bag: 5
// }

// const order = new Promise((resolve, reject)=>{
//     if (stock.shoe > 0) {
//         resolve("shoe is available");
//     }else{
//         reject("out of stock");
//     }
// }).then(x => console.log(x)).catch(y => console.log(y))

// github users api

// const url = "https://api.github.com/users";

    // const data = fetch(url);
    // data.then(response => response.json().then(
    // result => console.log(result[0]["avatar_url"])));

// async function fetchUsers(){
//    const data  = await fetch(url)
//    const result = await data.json()
//    console.log(result[0]);
// }

// fetchUsers()
// console.log("The end");

// Assignment 
// 1. bring out the common names of all the countries from this API
// https://restcountries.com/v3.1/all

// let mydata = 'https://restcountries.com/v3.1/all'
// async function myInfo(){
//     let info = await fetch(mydata)
//     let result = await info.json()
//     result.map(x => console.log(x.name.common));
// }
// myInfo();

// 2. write a function and import it into another file and call the function

// 3. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

// class BankAccount{
//     constructor(accountNumber, balance=0){
//         if(accountNumber.length == 9){
//             this.accountNumber = accountNumber;
//         }else{
//             console.log("Invalid account number");
//             exit();
//         }
//         this.balance = balance;
        // console.log("Account number is " + this.accountNumber);
        // console.log("Account balance is " + this.balance);
//     }
//     deposit(amount){
//        if(amount > 0){
//         this.balance += amount;
//         console.log("Deposit successful");
//         console.log("Balance is N", this.balance);
//        }else{
//         console.log("Amount must be greater than 0");
//        }
//     }

//     withdraw(amount){
//         if(amount <= this.balance){
//             this.balance -= amount;
//             console.log("Withdrawal successful");
//             console.log("Balance is N", this.balance);
//         }else{
//             console.log("Insufficient funds");
//         }
//     }

//     displayBalance(){
//         console.log("Balance is N" + this.balance);
//     }
// }

// const acc1 = prompt("Enter account number");
// const user1 = new BankAccount(acc1);
// while(true){
//     const action  = prompt("Enter B for Balance, D for Deposit, W for Withdrawal");
// if(action.toUpperCase() === "B"){
//     user1.displayBalance();
// }else if(action.toUpperCase() === "D"){
//     const amount =  parseInt(prompt("Enter amount to deposit"));
//     user1.deposit(amount);

// }else if(action.toUpperCase() === "W"){
//     const amount =  parseInt(prompt("Enter amount to withdraw"));
//     user1.withdraw(amount);

// }else{
//     console.log("Invalid action");
// }

// let answer = prompt("Do you want to perform another transaction?");
// if(answer.toUpperCase() === "N"){
//     console.log("have a nice day");
//     break;
// }else{
//     continue;
// }

// }



// 4. Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
    constructor() {
      this.name = '';
      this.departments = [];
    }
  
    addDepartment(department) {
      this.departments.push(department);
      console.log("Department added");
    }
  
    removeDepartment(department) {
      if (this.departments.includes(department)) {
        this.departments.splice(this.departments.indexOf(department), 1);
        console.log("Department removed");
      } else {
        console.log("Department not found");
      }
    }
  
    displayDepartments() {
      if (this.departments.length > 0) {
        console.log("Departments:");
        this.departments.forEach(dept => console.log(dept));
      } else {
        console.log("No departments to display");
      }
    }
  }
  
  const dept1 = new University('depare');
  console.log(dept1)
//   while (true) {
//     const action = prompt("Enter A to add dept, R to remove dept, D to display departments, or Q to quit");
  
//     if (action.toUpperCase() === "A") {
//       const deptName = prompt("Enter department name");
//       dept1.addDepartment(deptName);
//     } else if (action.toUpperCase() === "R") {
//       const deptName = prompt("Enter department name");
//       dept1.removeDepartment(deptName);
//     } else if (action.toUpperCase() === "D") {
//       dept1.displayDepartments();
//     } else if (action.toUpperCase() === "Q") {
//       console.log("Thank you");
//       break;
//     } else {
//       console.log("Invalid action");
//     }
//   }
  

// 5. use clicking of a button to fetch random user and display their details on the web page from https://randomuser.me/api

// const generate = document.getElementById("generate");
// const url = "https://randomuser.me/api";

// async function getUser(){
//     const data = await fetch(url);
//     const response = await data.json();
    // console.log(response.results[0].name.first);
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <img src="${response.results[0].picture.large}">
//     <h1> ${response.results[0].name.first} ${response.results[0].name.last} </h1>
//     <p>${response.results[0].email}</p>
    
//     `
//     document.body.appendChild(div);
// }



// generate.addEventListener("click", getUser);

// async function fetchUser(){
//     const url = "https://randomuser.me/api";
//     const data = await fetch(url)
//     const response = await data.json();
//     getUser(response.results[0]);
// }

// function getUser(user){
//     const showUser = document.getElementById("generate");
//     showUser.innerHTML = `
//     <img src="${user.picture.large}">
//     <h1> ${user.name.first} ${user.name.last} </h1>
//     <p>${user.email}</p>`;

// }
// document.getElementById("generate").addEventListener("click", fetchUser);
// fetchUser()

// const user = {
//     name : "wale",
//     age: 15
// }

// localStorage.setItem("data", JSON.stringify(user));

// const result = JSON.parse(localStorage.getItem("data"));
// console.log(result);