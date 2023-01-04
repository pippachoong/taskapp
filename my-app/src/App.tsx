import React from 'react';
import './App.css';

let name:string ;
let age: number | string;
// variable to contain both types number and string 
// this is called 'union' in TS
let isStudent:boolean;
let hobbies: string[]; // this can be an array of strings only
let role: [number,string] // this variable can contain one variable and one string only


// how to define a function 
function printName(name:string) {
  console.log(name);
  
}


// let person: Object - this is not a recommended practice as an Object has many properties inside it

// // below is how to define a variable as an object - this is called an interface keyword
// type Person = {
//   name: string;
//   age: number;
//   // age?: number;
//   //    ^   when we include ? after naming the property name, this means it's optional 
//   //        thus it will not show error if age is not included in the type Person object
// }

// let person: Person = {
//   name: "piyush",
//   age: 8
// }

// let lotsOfPeople:Person[]; // this is how to create an array of a Person object


function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
