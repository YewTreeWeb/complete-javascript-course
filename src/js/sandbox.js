/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-new-object */
/* eslint-disable dot-notation */
/* eslint-disable no-array-constructor */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

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
  }
}
