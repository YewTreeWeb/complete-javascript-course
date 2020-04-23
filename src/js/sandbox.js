/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

// Import externals
import 'airbnb-browser-shims'

// Import internals
import './modules/helpers'

console.log("Let's go!!")

// BASICS

// Creating Variables
const firstName = 'Mat'
const lastName = 'Teague'
console.log(`${firstName} ${lastName}`)

/**
 * Data Types
 *
 * Number: Floating point numbers, for decimals and integers
 * Sting: Sequence of characters, used for text
 * Boolean: Logical data type that can only be true or false
 * Undefined: Data type of a variable that does not have a value yet
 * Null: Also means 'non-existent'
 */

const age = 30
console.log(age)
console.log(`${firstName} ${age}`) // log first name and age with type coercion

// alert(`${firstName} you are alerting in the browser!`)

// const newLastName = prompt('What is your last name?')
// console.log(`New last name is: ${newLastName}`)

const now = 2020
const matAge = age
const aliceAge = 29
const yearMat = now - matAge - 1
const yearAlice = now - aliceAge - 1
console.log(`${firstName}'s year of birth was ${yearMat}`)
console.log(`Alice's year of birth was ${yearAlice}`)

// Math operators

console.log(now + 2)
console.log(now * 2)
console.log(now / 2)

// Logical operators
const aliceOlder = aliceAge > matAge
console.log(aliceOlder)

// typeof operator
console.log(typeof aliceOlder)
console.log(typeof matAge)
console.log(`${typeof firstName} is older than Alice`)

// / Operator precedence
const fullAge = 18
// Multiple operators
const isFullAge = now - yearMat >= fullAge // true
console.log(isFullAge)

// Grouping
const average = (matAge + aliceAge) / 2
console.log(average)

// Multiple assignments
let x
let y
// eslint-disable-next-line no-multi-assign
x = y = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 32 -6 // 26
console.log(x, y)

x *= 2
// eslint-disable-next-line operator-assignment
x = x + 1
x += 1
// eslint-disable-next-line no-plusplus
x++
console.log(x)

// Coding Challenge
const matHeight = 1.95 // metres
const matWeight = 98.09 // kilograms
const aliceHeight = 1.56 // metres
const aliceWeight = 50.96 // kilograms

const matBMI = Math.round(matWeight / (matHeight * matHeight))
const aliceBMI = Math.round(aliceWeight / (aliceHeight * aliceHeight))

const bmiHigher = matBMI > aliceBMI

console.log(`Is Mat's BMI higher than Alice's? ${bmiHigher}`)
console.log(matBMI, aliceBMI)

if (matBMI > aliceBMI) {
  console.log(`${firstName} your BMI is higher`)
} else {
  console.log('Alice your BMI is higher')
}

/**
 * Boolean Logic
 *
 * AND: && - A and B must be true or false
 * OR: || - A or B need to be true
 * NOT: ! - Invesrt the true/false value
 */
if (age < 13) {
  console.log(`${firstName} is a child`)
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager`)
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young adult`)
} else if (age >= 30 && age < 70) {
  console.log(`${firstName} is an adult`)
} else {
  console.log(`${firstName} is an elder`)
}

// / Ternary operator and Switch statements
const drink = age >= 18 ? 'drinks beer!' : 'drinks only squash.'
console.log(`${firstName} ${drink}`)

const job = 'UI Developer'
switch (job) {
  case 'UI Developer':
    console.log(`${firstName} codes UI elements`)
    break
  case 'Developer':
    console.log(`${firstName} codes websites`)
    break

  default:
    console.log('Does not code')
    break
}

// Make switch act like an if else.
switch (true) {
  case age < 13:
    console.log(`${firstName} watchs Hey Duggee`)
    break
  case age >= 13 && age < 20:
    console.log(`${firstName} can watch PG and young adult movies`)
    break
  case age >= 20 && age < 30:
    console.log(`${firstName} can watch GoT!`)
    break
  case age >= 30 && age < 70:
    console.log(`${firstName} can watch any aged show!!`)
    break

  default:
    console.log(`${firstName} likes Bargin Hunt`)
    break
}

/**
 * Truthy and Falsy values and equality operators
 *
 * falsy values: undefined, null, 0, '', NaN
 * truthy values: NOT falsy values
 *
 * ==: Does type coercion will convert one value to match another e.g. 23 == '23'
 * ===: strict, does not type coercion
 */
