/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable prefer-spread */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable block-scoped-var */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable vars-on-top */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-new-object */
/* eslint-disable dot-notation */
/* eslint-disable no-array-constructor */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable prefer-template */

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

/* Next Gen JavaScript */

// / let and const

// ES5
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller'
console.log(name5)

function driversLicence(test) {
  if (test === 'passed') {
    var firstName = 'John'
    var birthYear = 1990

    console.log(
      firstName +
        ' born in ' +
        birthYear +
        ', is now officially is allowed to drive'
    )
  }
}
driversLicence('passed')

// ES6
let name6 = 'Jane Smith'
const age6 = 23
name6 = 'Jane Miller'
console.log(name6)

const driversLicence2 = (test) => {
  if (test === 'passed') {
    const firstName = 'John'
    const birthYear = 1990

    console.log(
      `${firstName} born in ${birthYear} , is now officially is allowed to drive`
    )
  }
}

driversLicence2('passed')

// / Blocks & IIFEs

// Block ES6
{
  const a = 1
  const b = 2
  var c = 3
}

console.log(c) // Can't call a or b as they are block scoped, where as 'var' is function scoped

// ES5
;(function () {
  var c = 3
})

// / Strings
const firstName2 = 'Mathew'
const lastName2 = 'Teague'

const name = `${firstName2} ${lastName2}`

console.log(name.startsWith('M'))
console.log(name.endsWith('e'))
console.log(name.includes('e'), name)
console.log(`${firstName2} `.repeat(4))

// / Arrow functions

const years2 = [1980, 1985, 1989, 1990, 1995]

// ES5
var ages5 = years2.map(function (el) {
  return 2020 - el
})
console.log(ages5)

// ES6
let ages6 = years2.map((el) => 2020 - el)
console.log(ages6)

ages6 = years2.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`)
console.log(ages6)

ages6 = years2.map((el, index) => {
  const now = new Date().getFullYear()
  const age = now - el
  return `Age element ${index + 1}: ${age}.`
})
console.log(ages6)

// ES5
var boxES5 = {
  color: 'green',
  position: 1,
  // eslint-disable-next-line object-shorthand
  clickMe: function () {
    var self = this
    document
      .querySelector('.box--green')
      .addEventListener('click', function () {
        var str =
          'This is box number ' + self.position + ' and it is ' + self.color
        console.log(str)
      })
  },
}
// boxES5.clickMe()

function Test1(name) {
  this.name = name
}

// eslint-disable-next-line prettier/prettier
Test1.prototype.myFriends = function (friends) {
  // eslint-disable-next-line prettier/prettier
  var arr = friends.map(
    function (el) {
      return this.name + ' is friends with ' + el
    }.bind(this)
  )
  console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark']
new Test1('John').myFriends(friends)

// ES6
const boxES6 = {
  color: 'green',
  position: 1,
  clickMe() {
    document.querySelector('.box--green').addEventListener('click', () => {
      const str = `This is box number ${this.position} and it is ${this.color}`
      console.log(str)
    })
  },
}
boxES6.clickMe()

function Test2(name) {
  this.name = name
}

Test2.prototype.myFriendsES6 = function (friends) {
  const arr = friends.map((el) => `${this.name} is friends with ${el}`)
  console.log(arr)
}

class Test3 {
  constructor(name) {
    this.name = name
  }

  myFriendsES6(friends) {
    const arr = friends.map((el) => {
      return this.name + ' is friends with ' + el
    })
    console.log(arr)
  }
}

new Test2('Mike').myFriendsES6(friends)
new Test3('Steve').myFriendsES6(friends)

// / Destructuring

// ES5
var karl = ['Karl', 26]
var nameKarl = karl[0]
var ageKarl = karl[1]

// ES6
const [karlName, karlAge] = ['Karl', 26]
console.log(karlName, karlAge)

const obj2 = {
  first: 'Karl',
  last: 'Bobby',
}

const { first, last } = obj2
console.log(first, last)

const calcRetireES6 = (year) => {
  const age = new Date().getFullYear() - year
  return [age, 65 - age]
}

const [newAge, newRetire] = calcRetireES6(1990)
console.log(newAge)
console.log(newRetire)

// / Arrays

const boxes = document.querySelectorAll('.box')
const agesTest = [12, 17, 8, 21, 14, 11]

// ES5
var boxesArrES5 = Array.prototype.slice.call(boxes)
boxesArrES5.forEach(function (cur) {
  cur.style.background = 'red'
})
for (var j = 0; j < boxesArrES5.length; j++) {
  if (boxesArrES5[j].className === 'box box--red') {
    continue
    // break
  }

  boxesArrES5[j].textContent = 'I Changed to red'
}

var full = agesTest.map(function (cur) {
  return cur >= 18
})
console.log(full, 'position in array: ' + full.indexOf(true))
console.log(agesTest[full.indexOf(true)])

// ES6
const boxesArrES6 = Array.from(boxes)
boxesArrES6.forEach((cur) => (cur.style.background = 'dodgerblue'))
// forof loop combines the for loop with the forEach loop, allowing for continues and breaks like an original for loop
for (const el of boxesArrES6) {
  if (el.className.includes('box--blue')) {
    continue
  }

  el.textContent = 'I Changed to blue'
}

// findIndex works like the map and forEach methods
console.log(agesTest.findIndex((cur) => cur >= 18))
console.log(agesTest.find((cur) => cur >= 18)) // does the same as agesTest[full.indexOf(true)]

// / Spread operator
function addFourAges(a, b, c, d) {
  return a + b + c + d
}

// ES5

var sum1 = addFourAges(18, 30, 12, 21)
console.log(sum1)

var numbers = [18, 30, 12, 21]
var sum2 = addFourAges.apply(null, numbers)
console.log(sum2)

// ES6

const sum3 = addFourAges(...numbers) // expands the array into it's component
console.log(sum3)

const familyTeague = ['Alice', 'Lily', 'Pam', 'Mathew']
const familyMcMurtrie = ['Andrew', 'Julie', 'Poppy', 'Clare']
const marriedFamily = [
  ...familyTeague,
  'Tressa',
  'Chloe',
  'Sophie',
  ...familyMcMurtrie,
]
console.log(marriedFamily)

const h = document.querySelector('.boxes-heading')
const boxesSpread = document.querySelectorAll('.box')
const all = [h, ...boxesSpread]
Array.from(all).forEach((cur) => {
  cur.style.color = 'purple'
})

// / Rest Parameter

/**
 * Uses same notation as spread but is the exact oposite
 * Spread - takes and array and transforms it into single values
 * Rest - takes single values and transforms them into an array. It is an array like structure but not a true array
 */

// ES5

// function isFullAgeES5() {
//   // eslint-disable-next-line prefer-rest-params
//   console.log(arguments)
//   // eslint-disable-next-line prefer-rest-params
//   var argsArr = Array.prototype.slice.call(arguments)
//   argsArr.forEach(function (cur) {
//     console.log(new Date().getFullYear() - cur >= 18)
//   })
// }

function isFullAgeES5(limit) {
  // eslint-disable-next-line prefer-rest-params
  console.log(arguments)
  // eslint-disable-next-line prefer-rest-params
  var argsArr = Array.prototype.slice.call(arguments, 1)

  console.log(argsArr)

  argsArr.forEach(function (cur) {
    console.log(new Date().getFullYear() - cur >= limit)
  })
}

isFullAgeES5(18, 1990, 1999, 1965, 2016)

// ES6

// function isFullAgeES6(...years) {
//   console.log(years)
//   years.forEach((cur) => {
//     console.log(new Date().getFullYear() - cur >= 18)
//   })
// }

function isFullAgeES6(limit, ...years) {
  console.log(years)
  years.forEach((cur) => {
    console.log(new Date().getFullYear() - cur >= limit)
  })
}

isFullAgeES6(18, 1990, 1999, 1965, 2016)

// / Default Parameters

// ES5
function SmithPersonES5(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = 'Smith') : lastName
  nationality === undefined ? (nationality = 'English') : nationality

  this.firstName = firstName
  this.lastName = lastName
  this.yearOfBirth = yearOfBirth
  this.nationality = nationality
}

var bob = new SmithPersonES5('Bob', 1990)
var emily = new SmithPersonES5('Emily', 1983, 'Diaz', 'Spanish')
console.log(bob, emily)

// ES6
function SmithPersonES6(
  firstName,
  yearOfBirth,
  lastName = 'Smith',
  nationality = 'English'
) {
  this.firstName = firstName
  this.lastName = lastName
  this.yearOfBirth = yearOfBirth
  this.nationality = nationality
}

const tom = new SmithPersonES6('John', 1990)
const paula = new SmithPersonES6('Paula', 1983, 'Diaz', 'Spanish')
console.log(tom, paula)

// / Map

const question = new Map()
question.set(
  'question',
  'What is the offical name of the latest major JavaScript version?'
)
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(3, 'ES7')
question.set('correct', 3)
question.set(true, 'Correct answer!')
question.set(false, 'That was wrong answer')

console.log(question.get('question'))
console.log(question.size)

if (question.has(4)) {
  question.delete(4)
}

// question.clear() - deletes all

question.forEach((value, key) => {
  console.log(`This is ${key}, and it's set to ${value}`)
})

for (const [key, value] of question.entries()) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`)
  }
}

// const ans = Number(prompt('Write the correct answer'))
// console.log(question.get(ans === question.get('correct')))

// / Classes

// ES5
var PersonES5 = function (name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

PersonES5.prototype.calculateTheAge = function () {
  var ageES5 = new Date().getFullYear()
  ageES5 -= this.yearOfBirth
  console.log(this.name + ' is ' + age + ' years old')
}

var johnES5 = new PersonES5('John', 1990, 'teacher')
console.log(johnES5)

var AtheleteES5 = function (name, yearOfBirth, job, olymicGames, medals) {
  PersonES5.call(this, name, yearOfBirth, job)
  this.olymicGames = olymicGames
  this.medals = medals
}

AtheleteES5.prototype = Object.create(PersonES5.prototype)

var markES5 = new AtheleteES5('Mark', 1984, 'swimmer', 3, 10)
console.log(markES5)

AtheleteES5.prototype.wonMedal = function () {
  this.medals++
  console.log(this.name + ' has won ' + this.medals)
}
johnES5.calculateTheAge()
markES5.wonMedal()
// markES5.calculateTheAge()

// ES6
class PersonES6 {
  constructor(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateTheAge() {
    const age = new Date().getFullYear()
    console.log(`${this.name} is ${age - this.yearOfBirth} years old`)
  }

  static greeting() {
    console.log('Hello there!')
  }
}

const johnES6 = new PersonES6('John ES6', 1990, 'teacher')
PersonES6.greeting()
console.log(johnES6)

class AtheleteES6 extends PersonES6 {
  constructor(name, yearOfBirth, job, olymicGames, medals) {
    super(name, yearOfBirth, job)
    this.olymicGames = olymicGames
    this.medals = medals
  }

  wonMedal() {
    this.medals++
    console.log(`${this.name} has won ${this.medals}`)
  }
}

const markES6 = new AtheleteES6('Mark', 1984, 'swimmer', 3, 10)
console.log(markES6)
markES6.wonMedal()
markES6.calculateTheAge()

// / Challenge 8

class Elements {
  constructor(name, buildYear) {
    this.name = name
    this.buildYear = buildYear
  }
}

class Park extends Elements {
  constructor(name, buildYear, trees, area) {
    super(name, buildYear)
    this.trees = trees
    this.area = area
  }

  density() {
    // calculate the tree density of each park.
    return Math.round(this.trees / this.area)
  }
}

class Street extends Elements {
  constructor(name, buildYear, length, size = 'normal') {
    super(name, buildYear)
    this.length = length
    this.size = size
  }
}

const ages = (number, ...years) => {
  // calculate the average age of a street or park.
  let age = 0
  const now = new Date().getFullYear()
  years.forEach((cur) => {
    age += now - cur
  })
  return Math.round(age / number)
}

const streetLengths = (number, ...lengths) => {
  let totalLength = 0
  lengths.forEach((cur) => {
    totalLength += cur
  })
  const averageLength = totalLength / number
  return { totalLength, averageLength }
}

const parks = new Map()
parks.set('ocean', new Park('Ocean Park', 1825, 532, 60))
parks.set('green', new Park('Greenfield Park', 1924, 378, 100))
parks.set('national', new Park('National Park', 1500, 3204, 400))

const streets = new Map()
streets.set('fairy', new Street('Fairy Road', 1945, 10))
streets.set('donald', new Street('Donald Yakult Street', 1856, 40, 'long'))
streets.set('glyn', new Street('Glyn Road', 1954, 2, 'tiny'))
streets.set('glynn', new Street('Glynn Farm Road', 1955, 6, 'small'))

console.log(parks.get('ocean'))
console.log(streets.get('fairy'))
console.log(parks.size)
console.log(streets.size)

const parkReport = document.querySelector('.parks-report')
const streetReport = document.querySelector('.streets-report')

console.log('--- PARKS REPORT ---')
console.log(
  `Our ${parks.size} parks have an average age of ${ages(
    parks.size,
    parks.get('ocean').buildYear,
    parks.get('green').buildYear,
    parks.get('national').buildYear
  )} years`
)
parkReport.innerHTML = `
<li>
Our ${parks.size} parks have an average age of ${ages(
  parks.size,
  parks.get('ocean').buildYear,
  parks.get('green').buildYear,
  parks.get('national').buildYear
)} years
</li>`
for (const [key, value] of parks.entries()) {
  console.log(
    `${
      value.name
    } has a tree density of ${value.density()} trees per square mile`
  )
  parkReport.innerHTML += `<li>${
    value.name
  } has a tree density of ${value.density()} trees per square mile</li>`

  if (value.trees >= 1000) {
    console.log(`${value.name} has ${value.trees} trees.`)
    parkReport.innerHTML += `<li>${value.name} has ${value.trees} trees.</li>`
  }
}

console.log('--- STREET REPORT ---')
const { totalLength, averageLength } = streetLengths(
  streets.size,
  streets.get('fairy').length,
  streets.get('donald').length,
  streets.get('glyn').length,
  streets.get('glynn').length
)
console.log(
  `${streets.size} streets have a total length of ${totalLength} miles, with an average of ${averageLength} miles.`
)
streetReport.innerHTML = `<li>${streets.size} streets have a total length of ${totalLength} miles, with an average of ${averageLength} miles.</li>`
for (const [key, value] of streets.entries()) {
  console.log(`${value.name}, built in ${value.buildYear}, is a ${value.size}.`)
  streetReport.innerHTML += `<li>${value.name}, built in ${value.buildYear}, is a ${value.size} street.</li>`
}

// / Challenge 8 - instructor

class InstructorElement {
  constructor(name, buildYear) {
    this.name = name
    this.buildYear = buildYear
  }
}

class InstructorPark extends InstructorElement {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear)
    this.area = area
    this.numTrees = numTrees
  }

  treeDensity() {
    // calculate the tree density of each park.
    const density = this.numTrees / this.area
    console.log(
      `${this.name} has a tree density of ${density} trees per square km`
    ) // For console logging you don't need to return
  }
}

class InstructorStreet extends InstructorElement {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear)
    this.length = length
    this.size = size
  }

  classifyStreet() {
    const classification = new Map()
    classification.set(1, 'tiny')
    classification.set(2, 'small')
    classification.set(3, 'normal')
    classification.set(4, 'big')
    classification.set(5, 'huge')
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )}`
    )
  }
}

const allParks = [
  new InstructorPark('Green Park', 1997, 0.2, 215),
  new InstructorPark('National Park', 1894, 2.9, 3541),
  new InstructorPark('Oak Park', 1953, 0.4, 949),
]

const allStreets = [
  new InstructorStreet('Ocean Avenue', 1999, 1.1, 4),
  new InstructorStreet('Evergreen Street', 2008, 2.7, 2),
  new InstructorStreet('4th Street', 2015, 0.8),
  new InstructorStreet('Sunset Boulevard', 1982, 2.5, 5),
]

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0)
  // [3, 5, 6]
  // First iteration would be 0 + 3 = 3
  // Second would be 3 + 5 = 8
  // Third would be 8 + 6 = 14
  // Overall value would be 14

  return [sum, sum / arr.length]
}

function reportParks(p) {
  console.log('--- Instructor Parks Report ---')
  // Density
  p.forEach((e) => e.treeDensity())
  // Average age
  const ages = p.map((el) => new Date().getFullYear() - el.buildYear)
  const [totalAge, avgAge] = calc(ages)
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

  // Which park has more than 1000 trees
}

function reportStreets(s) {
  console.log('--- Instructor Streets Report ---')
}

reportParks(allParks)
reportStreets(allStreets)
