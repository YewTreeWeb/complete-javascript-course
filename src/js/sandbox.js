/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-classes-per-file */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
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
import './modules/game'
// import './modules/challenge'

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

// Instructor Solution

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

// / Challenge 5

let percentage

const holiday = {
  john: {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmounts: [],
    calcTips() {
      for (let i = 0; i < this.bills.length; i++) {
        const bill = this.bills[i]
        if (bill < 50) {
          percentage = 0.2
        } else if (bill >= 50 && bill < 200) {
          percentage = 0.15
        } else {
          percentage = 0.1
        }
        this.tips.push(Math.round(percentage * bill))
      }
    },
    calcAmounts() {
      this.calcTips()
      this.bills.forEach((bill, index) => {
        this.finalAmounts.push(bill + this.tips[index])
      })
    },
  },
  mark: {
    bills: [77, 375, 110, 45],
    tips: [],
    finalAmounts: [],
    calcTips() {
      for (let i = 0; i < this.bills.length; i++) {
        const bill = this.bills[i]
        if (bill < 100) {
          percentage = 0.2
        } else if (bill >= 100 && bill < 300) {
          percentage = 0.1
        } else {
          percentage = 0.25
        }
        this.tips.push(Math.round(percentage * bill))
      }
    },
    calcAmounts() {
      this.calcTips()
      this.bills.forEach((bill, index) => {
        this.finalAmounts.push(bill + this.tips[index])
      })
    },
  },
}

holiday.john.calcAmounts()
holiday.mark.calcAmounts()

const averageTips = (name) => {
  const { tips } = name
  let averageTip = 0

  name.calcTips()
  for (let i = 0; i < tips.length; i++) {
    averageTip += tips[i]
  }
  return Math.round(averageTip / tips.length)
}

const johnAverage = averageTips(holiday.john)
const markAverage = averageTips(holiday.mark)

console.log(johnAverage)
console.log(markAverage)

if (johnAverage > markAverage) {
  console.log(
    `John paid the highest tips on average! With an average of £${johnAverage}`
  )
} else {
  console.log(
    `Mark paid the highest tips on average! With an average of £${markAverage}`
  )
}

console.log(holiday.john.finalAmounts)
console.log(holiday.mark.finalAmounts)

// Instructor Solution

const instructorJohn = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips() {
    this.tips = []
    this.finalValues = []
    for (let i = 0; i < this.bills.length; i++) {
      let tipPercent
      const bill = this.bills[i]

      // Determine percentage based on tipping rules.
      if (bill < 50) {
        tipPercent = 0.2
      } else if (bill >= 50 && bill < 200) {
        tipPercent = 0.15
      } else {
        tipPercent = 0.1
      }

      // Add results to the corresponing arrays.
      this.tips[i] = bill * tipPercent
      this.finalValues[i] = bill + bill * tipPercent
    }
  },
}

instructorJohn.calcTips()
console.log(instructorJohn)

const instructorMark = {
  fullName: 'Mark Miller',
  bills: [77, 375, 110, 45],
  calcTips() {
    this.tips = []
    this.finalValues = []
    for (let i = 0; i < this.bills.length; i++) {
      let tipPercent
      const bill = this.bills[i]

      // Determine percentage based on tipping rules.
      if (bill < 100) {
        tipPercent = 0.2
      } else if (bill >= 100 && bill < 300) {
        tipPercent = 0.1
      } else {
        tipPercent = 0.25
      }

      // Add results to the corresponing arrays.
      this.tips[i] = bill * tipPercent
      this.finalValues[i] = bill + bill * tipPercent
    }
  },
}

instructorMark.calcTips()
console.log(instructorMark)

const instructorCalcAvg = (tips) => {
  let sum = 0
  for (let i = 0; i < tips.length; i++) {
    // eslint-disable-next-line operator-assignment
    sum = sum + tips[i]
  }
  return Math.round(sum / tips.length) // I've added rounding for easier reading
}

instructorJohn.average = instructorCalcAvg(instructorJohn.tips)
instructorMark.average = instructorCalcAvg(instructorMark.tips)

console.log(instructorJohn, instructorMark)

if (instructorJohn.average > instructorMark.average) {
  console.log(
    `John paid the highest tips on average! With an average of £${instructorJohn.average}`
  )
} else {
  console.log(
    `Mark paid the highest tips on average! With an average of £${instructorMark.average}`
  )
}

// Advanced JavaScript: Objects and functions

// / Constructors

// / Original way
// const jeff = {
//   name: 'Jeff',
//   yearOfBirth: '1945',
//   job: 'self employed',
// }

// / New way using constructors
class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name
    this.lastName = 'Teague'
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateAge() {
    const now = new Date().getFullYear()
    console.log(now - this.yearOfBirth)
  }

  retirement() {
    const yearOfBirth = calculateAge(this.yearOfBirth)
    const retire = 70 - yearOfBirth
    if (retire > 0) {
      console.log(`${this.name} retires in ${retire} years`)
    } else {
      console.log(`${this.name} has retired or is due for retirement`)
    }
  }
}

Person.prototype.middleName = 'Morris' // ES5 way

const jeff = new Person('Jeff', 1945, 'self employed')
jeff.calculateAge()
jeff.retirement()
console.log(jeff)
console.log(jeff.lastName)
console.log(jeff.middleName)

// / Object create

const personProto = {
  calculateTheAge() {
    const now = new Date().getFullYear()
    console.log(now - this.yearOfBirth)
  },
}

const george = Object.create(personProto)
george.yearOfBirth = 1913
console.log(george)

const lil = Object.create(personProto, {
  name: { value: 'Lilian' },
  yearOfBirth: { value: 1915 },
  job: { value: 'unknown' },
})

console.log(lil)

// / Primitives vs objects
/**
 * Variables with primitives hold the data within themselves
 * Variables with objects don't contain the object but points to the real object.
 */

// Primitive
let a = Math.round(Math.random()) + 1
const b = a
a = 46
console.log(a)
console.log(b)

// Object
const obj1 = {
  name: 'Test',
  age: 35,
}
const obj2 = obj1
obj1.age = 39
console.log(obj1)
console.log(obj2)

// Functions
const ageVar = 28
const obj3 = {
  name: 'Jonas',
  city: 'Lisbon',
}

const change = (a, b) => {
  a = 30
  b.city = 'London'
}

// When primitvies are passed to functions a copy is created. It will never effect the top level variable
// When an object is passed a reference that points to the original is passed.
change(ageVar, obj3)

console.log(ageVar)
console.log(obj3.city)

// / Pasing functions as arguments

const yearsArray = [1989, 1990, 2000, 2005]

const calcTheAge = (el) => {
  const now = new Date().getFullYear() - 1
  return now - el
}

const fullAges = (el) => {
  return el >= 18
}

const arrayCalc = (arr, fn) => {
  const arrRes = []
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

const maxHeartRate = (el) => {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el)
  } else {
    return -1
  }
}

const agesArray = arrayCalc(yearsArray, calcTheAge)
console.log(agesArray)

const isFullAges = arrayCalc(agesArray, fullAges)
console.log(isFullAges)

const heartRate = arrayCalc(agesArray, maxHeartRate)
console.log(heartRate)

// / Funstions returning functions

const interviewQuestion = (job) => {
  if (job === 'designer') {
    return (name) =>
      console.log(`${name}, can you please explain what UX design is?`)
  } else if (job === 'teacher') {
    return (name) => console.log(`What subject do you teach, ${name}?`)
  } else {
    return (name) => console.log('What do you do?')
  }
}

const teacherQuestion = interviewQuestion('teacher')
const designerQuestion = interviewQuestion('designer')
const jobQuestion = interviewQuestion('developer')
teacherQuestion('Joy')
designerQuestion('Elodie')
jobQuestion('Mat')

interviewQuestion('teacher')('Mark')

// / Immediatly invoke function expressions (IIFE)

const game = () => {
  const score = Math.round(Math.random() * 10) + 1
  console.log(score >= 5)
}
game()

// Running function on load and score var is no longer accessible outside function.
// IIFE keeps code safe for example if the code is used and by someone else and they use the same vars then the IIFE vars will be safe and not effected.
;((goodLuck) => {
  const score = Math.round(Math.random() * 10) + 1
  console.log(score >= 5 - goodLuck)
})(3)

// / Closures

// Scope chain remains intake
// Allows function variables to be used long after the function has returned
// Closures happen automatically
const retirementYears = (retire) => {
  const a = ' years left until retirement.'
  return (yearOfBirth) => {
    const now = new Date().getFullYear() - 1
    const age = now - yearOfBirth
    console.log(retire - age + a)
  }
}

const retirementUS = retirementYears(66)
retirementUS(1989)
const retirementUK = retirementYears(70)
retirementUK(1989)

retirementYears(70)(1990)

// Rewritting interview questions with closures
const questions = (job) => {
  return (name) => {
    if (job === 'designer') {
      console.log(`${name}, can you please explain what UX design is?`)
    } else if (job === 'teacher') {
      console.log(`What subject do you teach, ${name}?`)
    } else {
      console.log(`${name} what do you do as a ${job}?`)
    }
  }
}

questions('teacher')('Bob')
questions('developer')('Mat')

// / Bind, call and apply

class Speaker extends Person {
  constructor(name, yearOfBirth, job) {
    super(name, yearOfBirth, job)
    this.time = new Date().getHours()
  }

  speech(style, time) {
    let timeOfDay = time
    if (!time) {
      if (this.time > 0 && this.time < 12) {
        timeOfDay = 'morning'
      } else if (this.time >= 12 && this.time < 18) {
        timeOfDay = 'afternoon'
      } else {
        timeOfDay = 'evening'
      }
    }
    if (style === 'formal') {
      console.log(
        `Good ${timeOfDay}, Ladies and gentlemen! I'm ${this.name} a ${
          this.job
        } and I'm ${calculateAge(this.yearOfBirth)} years old.`
      )
    } else if (style === 'friendly') {
      console.log(
        `Yo! I'm ${this.name}, my job is ${this.job} and I'm ${calculateAge(
          this.yearOfBirth
        )} years old! Have a great ${timeOfDay}!!`
      )
    }
  }
}

const karl = new Speaker('Karl Pots', 1987, 'Designer')
const emily = new Person('Emily Morgan', 1865, 'Bandit')

karl.speech('formal')
karl.speech('friendly')

karl.speech.call(emily, 'friendly', 'afternoon') // call allows extention

// karl.speech.apply(emily, ['formal']) // Adds an array.

// Bind creates a copy and stores it somewhere
// Fixes pre-defined values to functions
// First parameter of bind has to be the this.
const karlStyle = karl.speech.bind(karl, 'formal')
const emilyStyle = karl.speech.bind(emily, 'friendly')

karlStyle('evening')
emilyStyle('morning')

// Extendinf previous example.
const isAdult = (limit, el) => {
  return el >= limit
}

const arrayAgeCalc = (arr, fn) => {
  const arrRes = []
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

const newAges = arrayAgeCalc(yearsArray, calcTheAge)
const fullJapan = arrayAgeCalc(newAges, isAdult.bind(this, 20))
console.log(newAges)
console.log(fullJapan)

// / Challenge 6
;(() => {
  let qScore = 0

  class Question {
    constructor(question, answer, correct) {
      this.question = question
      this.answer = answer
      this.correct = correct
    }

    displayQuestion() {
      console.log(this.question)
      for (let i = 0; i < this.answer.length; i++) {
        console.log(this.answer[i])
      }
      return this
    }

    displayAnswer(ans, next) {
      ans = Number(ans)

      if (ans === this.correct) {
        console.log('Your on fire! That is the correct answer.')
        qScore += 1
      } else {
        console.log('Aww bad luck old chum, that was the wrong answer.')

        if (qScore > 0) {
          qScore -= 1
        }
      }
      console.log(typeof ans, ans)
      console.log(typeof this.correct, this.correct)
      console.log(`You have a current score of: ${qScore}`)
    }
  }

  const q1 = new Question('Is JavaScript cool?', ['0. Yes', '1. No'], 0)
  const q2 = new Question(
    'Which answer is correct for the sum of 2+2?',
    ['0. 2', '1. 6', '2. 3', '3. 4'],
    3
  )
  const q3 = new Question(
    'What colour is the sun?',
    ['0. Blue', '1. Green', '2. Yellow'],
    2
  )

  const arrQuestions = [q1, q2, q3]

  const nextQuestion = () => {
    const randomQuestion = Math.round(Math.random() * arrQuestions.length)

    arrQuestions[randomQuestion].displayQuestion()

    const answer = prompt('What is the answer to the console question?')
    console.log(typeof answer, answer)

    if (answer !== 'exit' && answer !== null && answer !== '') {
      arrQuestions[randomQuestion].displayAnswer(answer)
      nextQuestion()
    }
  }

  // nextQuestion()
})()

// / Instructor Solution
;(function () {
  function InstructorQuestion(question, answers, correct) {
    this.question = question
    this.answers = answers
    this.correct = correct
  }

  InstructorQuestion.prototype.showQuestion = function () {
    console.log(this.question)
    for (let i = 0; i < this.answers.length; i++) {
      console.log(`${i}: ${this.answers[i]}`)
    }
  }
  InstructorQuestion.prototype.checkAnswer = function (ans, callback) {
    let sc
    if (ans === this.correct) {
      console.log('Correct answer!')
      sc = callback(true)
    } else {
      console.log('Wrong answer. Try again.')
      sc = callback(false)
    }

    this.displayScore(sc)
  }
  InstructorQuestion.prototype.displayScore = function (score) {
    console.log(`Your current score is: ${score}`)
    console.log('--------------------------------')
  }

  const instructorQ1 = new InstructorQuestion(
    'Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0
  )
  const instructorQ2 = new InstructorQuestion(
    "What is the name of this course's teacher?",
    ['John', 'Micheal', 'Jonas'],
    2
  )
  const instructorQ3 = new InstructorQuestion(
    'What best describes coding?',
    ['Boring', 'Hard', 'Fun', 'Tedius'],
    2
  )

  const instructorQuestions = [instructorQ1, instructorQ2, instructorQ3]

  function instructorScore() {
    let sc = 0
    return function (correct) {
      if (correct) {
        sc++
      }
      return sc
    }
  }

  const keepScore = instructorScore()

  function instructorNextQuestion() {
    const n = Math.floor(Math.random() * instructorQuestions.length)

    instructorQuestions[n].showQuestion()

    // parseInt does the same as Number.
    const instructorAnswer = prompt('Please select the correct answer')

    if (instructorAnswer !== 'exit') {
      instructorQuestions[n].checkAnswer(parseInt(instructorAnswer), keepScore)
      instructorNextQuestion()
    }
  }

  // instructorNextQuestion()
})()
