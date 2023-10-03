
//var,const,let usage
//function decleration usage
//function expression usage 

var from = "Ann"; //declaring  a variable and assigning a value to it
showMessage(from, "Hello");  //function is called even before declaring called hoisting only function declerations can be hoisted 
//function declaration  not function expressions 
function showMessage(from, text) {   
    from = '*' + from + '*'; 
    console.log( from + ': ' + text );
    let x = 'hello';
    //from = "Mary";
    //console.log( from + ': ' + text );
  }
//console.log(x); //here the console log shows reference error coz x is let a block scope variable 
  console.log( from );
  //function expression
  let add = function sum(a,b)
  {
    return a+b;
    
  }
  console.log(add(3,4));
  //console.log(sum(3,4)); //showing an error ReferenceError: sum is not defined
  

  //********************************************************************* */
//array ,for loop usage

  let arr = [1,2,3,4,5,6]; //or let arr= new array();
  for(var i=0;i<arr.length;i++)
  {
    console.log(arr[i]);
  }
  for(var i of arr)
  {
    console.log(i);
  }
  //************************************************************** */
  //array methods 

  arr.pop();//pop the number from behind
  console.log(arr);//gives  1, 2, 3, 4, 5 

  arr.push(7);
  console.log(arr);//puh a  number 7 to the array 1, 2, 3, 4, 5, 7 

  arr.shift();//remove the element from the top 2, 3, 4, 5, 7
  console.log(arr);
  console.log(arr.length);

  arr.unshift(0,1);//add the element from the top 0, 1, 2, 3,4, 5, 7
  console.log(arr);
  console.log(arr.length);

  //delete and replecing elements in array

  arr.splice(0,2);//removing first two dgits 2, 3, 4, 5, 7
  console.log(arr);

  arr.splice(4,0,6);//inserting 6 at the 4th index 2, 3, 4, 5, 6, 7
  console.log(arr);

  let op = arr.splice(0,2,'a','b');//removing and replacing it with a,b
  console.log(op);//gives the 2,3 
  console.log(arr);// gives 'a', 'b', 4, 5, 6, 7

 //gives the copy of items from start to end
 let avr = arr.slice(0,2);
 console.log(avr); //'a', 'b'
 console.log(arr);//'a', 'b', 4, 5, 6, 7  doesnt make any changes to the array orginal array

 console.log(arr.slice(0,-3));//last 3 elements to be ignored 'a', 'b', 4
//loop through the array 
//for each arrow funtion
 arr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in array`);
  });
  
  ///&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  //example for arrow function
  let rebel =()=>{
    console.log('i am in the arrow function');
  }

  rebel();
  //arrow function with parameters
  let parameters =(a,b)=>{
    console.log(`i am in the arrow function ${a} ${b}`);
  }

  parameters('with','parameters');

  //array function with single parameter no () required
  let squared = n =>{
    return(n*n);
  }
  console.log(squared(4));

  //array method map for trasforming
  const squaredNumbers = arr.map(function(item, index, array) {
    return item * item;
  });
console.log(squaredNumbers);//gives  NaN, NaN, 16, 25, 36, 49
console.log(arr.map(item => item*item)); // same effect NaN, NaN, 16, 25, 36, 49

//filterning 
const filteredNumbers = squaredNumbers.filter(num => !isNaN(num));
console.log(filteredNumbers); //gives [16, 25, 36, 49]
//sorting the array 



//reversing the array
console.log(arr.reverse());//give 7, 6, 5, 4, 'b', 'a'

//sopliting and joining
const sentence = "This is a sample sentence";
const splitwords = sentence.split(" ",2);
console.log(splitwords);//gives 'This', 'is'
 console.log(arr.reverse().join(""));//join method to make array to string join by 

 //Reduce array method to calculate the sum or difference of the items in the array 
 let reduce = filteredNumbers.reduce(function(prev,currentitem,index,array){
    return prev+currentitem
 },0);
 console.log(reduce)
 console.log(filteredNumbers.reduce((prev,currentitem)=> prev+currentitem,0));

 //indexof,includes,find
 const fruits = ["apple", "banana", "cherry", "banana", "date"];

console.log(fruits.indexOf("banana")); 
console.log(fruits.indexOf("banana", 2)); //give 3 :starting from position 2
console.log(fruits.lastIndexOf("banana")); // gives 3 last occurrence
console.log(fruits.lastIndexOf("banana", 2))//gives 1 coz lat occurance from starting position 2
console.log(fruits.includes("banana"));//true
const foundNumber = fruits.find(item => item === "banana");
console.log(foundNumber);//banana
console.log(fruits.find(item => item === "mango"));//undefined
console.log(fruits.filter(item => item === "banana"));//find all can be mimicked by using filter method  in js  'banana', 'banana'
//closoure function


 function outerdemo(name) {
    function innerone() {
      return "my name is inside demo " + name;
    }
  
    function insidedemotwo() {
      return "inside demo two: " + name;
    }
  
    console.log(innerone()); // Call innerone directly
    console.log(insidedemotwo()); // Call insidedemotwo directly
  }
  
  outerdemo("deepthi");
  function demo(name) {
    function inner() {
      return "my name is inside demo " + name;
    }
    function innerm() {
      return "inside demo two: " + name;
    }
    
    return { inner, innerm };
  }
  
  let oops = demo("deepthi");
  console.log(oops.inner()); // Output: my name is inside demo deepthi
  console.log(oops.innerm()); // Output: inside demo two: deepthi
  //objects in js 
  //creating an onject
  let person ={};//let user = new Object(); an another way
  console.log(typeof person);//object
  person = {    //has key value pair the key is a string and values is of any data type 
    name: "John", 
    age: 80       
  };
  console.log(person);
  console.log(person.name);
  //console.log(person[name]); throwing error
  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
  //key value is covverted to string
  let obj = {
    0: "test" // same as "0": "test"
  };
  console.log(( obj["0"] )); // test
  console.log(( obj[0] )); 
//externally assigning a value like this for key
//key in object 
let moke = "hyder";
  let one = {
    [moke]: "test" // same as "0": "test"
  };
  console.log(one); 
  console.log("hyder" in one);//true cheks for the key in the object

  //object destructuring
  const man = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  const { firstName,lastName,age } = man;
  
  console.log(firstName); //  John
  console.log(lastName); 
  console.log(age); //  30

  //create new object from combing previous objects spread operator
  const details = {
    age: 45,
    country: "USA",
  };
  
  const mergedPerson = { ...details,...man ,...person, };
  
  console.log(mergedPerson);// name: 'John',age: 30,country: 'USA',firstName: 'John',lastName: 'Doe' the age factor present in all three objects updates with e last combining object value
  
let empty ={};
  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };
  
  // copies all properties from permissions1 and permissions2 into user
  Object.assign(empty, permissions1, permissions2);
  console.log(empty);//contain all the permissions from p1 and p2 to user




const keys = Object.keys(person);
console.log(keys); // 'name', 'age'

const values = Object.values(person);
console.log(values); //'John', 80

const entries = Object.entries(person);
console.log(entries);//[['name', 'John' ], [ 'age', 80 ]] 
  // we use [] noatation for Accessing a property with spaces or special characters multliple characters 
  const movie = {
    "movie title": "Inception",
    "release-year": 2010,
  };
  
  console.log(movie["movie title"]);   //Inception
  console.log(movie["release-year"]);  //2010
  //console.log(movie."movie title"); //throws error
  //console.log(person[name])//throws error 
  //object made using constructor
  function makeUser(name, age) {
    return {
      name: name,
      age: age,
    };
  }
  let user = makeUser("John", 30);
  user.country ="japan";  //adding a new key value pair to an object
 console.log(user) // John
//happens when sending to the server 
const jsonString = JSON.stringify(user);
console.log(jsonString);
//json object happens when sending from server to the client 
const onejson = jsonString;
const jsonObj = JSON.parse(onejson);
console.log(jsonObj);
