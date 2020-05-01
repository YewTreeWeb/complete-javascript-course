/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-new-object */
/* eslint-disable dot-notation */
/* eslint-disable no-array-constructor */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

// Import externals
import 'airbnb-browser-shims'

// Import internals
import './modules/helpers'

console.log("Let's go!!")

/* BEHIND THE SCENCES */

// Hoisting

// / Function hoisting
// Can call function before creation with function declaration. Arrow functins are not declartions but expressions
calcAge(1989)
function calcAge(year) {
  console.log(2020 - year)
}

// Cannot call function before function creation with function expression
// retire(1989)
const retire = (year) => {
  console.log(70 - (2020 - year))
}

// / Variable hoisting
// console.log(testAge) // Will get undefined.
// const testAge = 30

// Scoping
const a = 'Hello '
first()

function first() {
  const b = 'Hi! '
  second()
  function second() {
    const c = 'Hey!'
    console.log(a + b + c)
    third() // Second function has access to third due to scoping.
  }
}

function third() {
  const d = 'John'
  // console.log(c) // Cannot access c as the execution chain is different to the scope chain.
  console.log(a + d) // Can access as they are in the scope chain.
}

// 'this' variable/keyword

/**
 * Regular function call: this keyword points at the global object
 * Method call: this variable points to the object this is calling the method
 * The this keyword is not assigned a value until a function where it is defined.
 * The this keyword only becomes something as soon as the object method is called.
 */

console.log(this) // In global context will be the window object. With Webpack and module scope it will be undefined.
calculateAge(1989)

function calculateAge(year) {
  console.log(2020 - year)
  console.log(this)
}

const john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge() {
    console.log(this)
    console.log(2020 - this.yearOfBirth)
    /*
    function innerFunction() {
      console.log(this) // Will go back to being the window object instead of John object. This happens when calling a normal function.
    }
    innerFunction()
    */
  },
}

john.calculateAge()

const mike = {
  name: 'Milke',
  yearOfBirth: 1984,
}

mike.calculateAge = john.calculateAge // Method borrowing.
mike.calculateAge()
