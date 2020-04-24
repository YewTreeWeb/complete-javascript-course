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

// / Coding Challenge 1
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
 * ===: Strict, does not type coercion
 * !==: Does not equal
 */

// / Coding Challenge 2

// Get average score.
const johnScore = Math.round((89 + 120 + 103) / 3)
const mikeScore = Math.round((116 + 94 + 123) / 3)
const maryScore = Math.round((97 + 134 + 105) / 3)

const score = document.querySelector('.score')

if (johnScore > mikeScore && johnScore > maryScore) {
  console.log(`John's team is the winner! With a score of: ${johnScore}`)
  score.innerHTML += `<p>John's team is the winner! With a score of <span>${johnScore}</span></p>`
} else if (mikeScore > johnScore && mikeScore > maryScore) {
  console.log(`Mike's team is the winner! With a score of: ${mikeScore}`)
  score.innerHTML += `<p>Mike's team is the winner! With a score of <span>${mikeScore}</span></p>`
} else if (maryScore > johnScore && maryScore > mikeScore) {
  console.log(`Mary's team is the winner! With a score of: ${maryScore}`)
  score.innerHTML += `<p>Mary's team is the winner! With a score of <span>${maryScore}</span></p>`
} else {
  console.log('There has been a draw!')
  score.innerHTML += `<p>There has been a draw!</p>`
}

// Functions
const calculateAge = (birthYear) => {
  const year = new Date().getFullYear()
  return year - birthYear - 1
}
const retirement = (year, name) => {
  const yearOfBirth = calculateAge(year)
  const retire = 70 - yearOfBirth
  if (retire > 0) {
    console.log(`${name} retires in ${retire} years`)
  } else {
    console.log(`${name} has retired or is due for retirement`)
  }
}

retirement(1989, 'Mat')

// / Function statements and expressions

/**
 *
 * Function declartion
 * funciton name (yourName) {}
 *
 * Function expression
 * const name = function (yourName) {}
 */
const whatDoYouDo = (role, name) => {
  switch (role) {
    case 'coder':
      return `${name} codes for fun and work`
    case 'teacher':
      return `${name} teaches people new things`
    case 'vet':
      return `${name} helps sick animals`

    default:
      return `${name} does something else`
  }
}

console.log(whatDoYouDo('coder', 'Mat'))

// / Arrays

// Initialize array
const names = ['Mat', 'Alice', 'Lily']
const years = new Array(1989, 1990, 2018)

console.log(names)

// Mutate Array
names[names.length] = 'Pam'

names.push('Jeff') // adds element to end of array
names.unshift('Pepsi') // adds element to the start of array
console.log(names)

names.pop() // removes the end element
names.shift() // removes the start element
console.log(names)

console.log(names.indexOf('Lily')) // returns the position of the element within the array

const hasLily = names.includes('Lily') ? 'Has Lily' : "Dosen't have Lily inside"
console.log(hasLily)

// / Coding Challenge 3

const tips = []
const bills = []
const tipping = (bill) => {
  let tip
  if (bill < 50) {
    tip = Math.round(bill * (20 / 100))
  } else if (bill >= 50 && bill < 200) {
    tip = Math.round(bill * (15 / 100))
  } else {
    tip = Math.round(bill * (10 / 100))
  }

  tips.push(`£${tip}`)

  const total = `£${bill + tip}`
  bills.push(total)
}

tipping(124)
tipping(48)
tipping(268)
console.log(tips)
console.log(bills)

// How instructor would do it
const tipCalculator = (bill) => {
  let percentage
  if (bill < 50) {
    percentage = 0.2
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15
  } else {
    percentage = 0.1
  }
  return Math.round(percentage * bill) // I've round it to stop the crazy decimal points.
}

const instructorBills = [124, 48, 268]
const instructorTips = [
  tipCalculator(instructorBills[0]),
  tipCalculator(instructorBills[1]),
  tipCalculator(instructorBills[2]),
]
const finalValues = [
  instructorBills[0] + instructorTips[0],
  instructorBills[1] + instructorTips[1],
  instructorBills[2] + instructorTips[2],
]
console.log(instructorTips)
console.log(finalValues)

// / Objects
const person = {
  firstName: 'Mathew',
  middleName: 'Adam',
  lastName: 'Teague',
  birthYear: 1989,
  family: ['Alice', 'Lily', 'Pam', 'Tressa', 'Chloe', 'Sophie'],
  job: 'UI Developer',
  isMarried: true,
}

console.log(person)
console.log(person.firstName)
console.log(person['lastName'])
console.log(person.family[2])
person.job = 'Developer'
console.log(person)

const lily = new Object()
lily.name = 'Lily Jessica Teague'
lily.birthYear = '2018'
lily['job'] = 'Attends nursery'
console.log(lily)

// / Objects and methods
const pam = {
  firstName: 'Pamela',
  middleName: 'Mary',
  lastName: 'Teague',
  birthYear: 1952,
  family: ['Alice', 'Lily', 'Mathew', 'Tressa', 'Chloe', 'Sophie'],
  job: 'Retired',
  isMarried: false,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthYear
  },
}
console.log(pam.calcAge())
console.log(pam)

// / Coding Challenge 4
const mat = {
  firstName: 'Mathew',
  middleName: 'Adam',
  lastName: 'Teague',
  birthYear: 1989,
  family: ['Alice', 'Lily', 'Pam', 'Tressa', 'Chloe', 'Sophie'],
  job: 'UI Developer',
  isMarried: true,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthYear
  },
  heightFt: 6.4,
  weightSt: 15.4,
  calcMessure() {
    const height = this.heightFt / 3.28
    const mass = this.weightSt * 6.35029318
    this.height = height.toFixed(2)
    this.weight = mass.toFixed(2)
  },
  calcBMI() {
    this.bmi = Math.round(this.weight / (this.height * this.height))
  },
}

const alice = {
  firstName: 'Alice',
  lastName: 'Teague',
  birthYear: 1990,
  family: ['Lily', 'Mathew', 'Andrew', 'Julie', 'Poppy', 'Clare'],
  job: 'Student Support',
  isMarried: true,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthYear
  },
  heightFt: 5.4,
  weightSt: 8,
  calcMessure() {
    const height = this.heightFt / 3.28
    const mass = this.weightSt * 6.35029318
    this.height = height.toFixed(2)
    this.weight = mass.toFixed(2)
  },
  calcBMI() {
    this.bmi = Math.round(this.weight / (this.height * this.height))
  },
}

mat.calcMessure()
alice.calcMessure()
mat.calcBMI()
alice.calcBMI()
console.log(mat, alice)
console.log(mat.bmi, alice.bmi)

if (mat.bmi > alice.bmi) {
  console.log(`${mat.firstName} had the highest BMI value of ${mat.bmi}`)
} else if (alice.bmi > mat.bmi) {
  console.log(`${alice.firstName} had the highest BMI value of ${alice.bmi}`)
} else {
  console.log(
    `Both BMIs are the same Mat's BMI: ${mat.bmi} and Alice's BMI: ${alice.bmi}`
  )
}

// Instructor Solution
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi // to call value within an if
  },
}
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi // to call value within an if
  },
}

if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.fullName} had the highest BMI value of ${john.bmi}`)
} else if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName} had the highest BMI value of ${mark.bmi}`)
} else {
  console.log(
    `Both BMIs are the same ${john.fullName}'s BMI: ${john.bmi} and ${mark.fullName}'s BMI: ${mark.bmi}`
  )
}

// / Loops and iteration

for (let i = 0; i < person.family.length; i++) {
  const family = person.family[i]
  console.log(family)
}

/**
 * Iteration example:
 *
 * i = 0, 0 < 6 true, log i to console, i++
 * i = 1, 1 < 6 true, log i to console, i++
 * ...
 * i = 5, 5 < 6 true, log i to console, i++
 * i = 6, 6 < 6 false, exit loop
 *
 * for (let i = 0; i < person.family.length; i+= 1) {}
 */

let i = 0
while (i < person.family.length) {
  const family = person.family[i]
  console.log(family)
  i += 1
}

// continue and break statements
for (let i = 0; i < alice.family.length; i++) {
  const fam = alice.family[i]
  if (i === 2) continue
  if (typeof fam !== 'string') break
  console.log(fam)
}
