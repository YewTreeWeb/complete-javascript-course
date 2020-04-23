// Import externals
import "airbnb-browser-shims";
import { isToday, format } from "date-fns";

// Import internals
import "./modules/helpers";

console.log("Let's go!");

/* Basics */
let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

// Strings
let email = "mathew.teague@gmail.com";
console.log(email);

let firstName = "Mathew";
let lastName = "Teague";

let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[0]);

// String Length
console.log(fullName.length);

// String Methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf("@");
console.log("index is: " + index);

/* Math operators
    + = plus
    - = takeaway
    * = times
    / = divide
    ** = power of
    % = remainder
*/
// Adding one shorthand ++
// Subtracting one shorthand --
// += adds on the value to the current
// -= subtracts the value from the current etc.
let likes = 10;

//likes++;
// likes--;
// likes+=;
// likes-=;
// likes*=;
// likes/=;

console.log(likes);

// Nan = not a number

/* Template Strings */
const title = "The best of...";
const author = "Mathew Teague";

let concatResult =
  "The blog called " + title + " by " + author + " has " + likes + " likes.";
let templateResult = `The blog called ${title} by ${author} has ${likes} likes.`;

// console.log(concatResult);
console.log(templateResult);

let htmlContent = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <p class="small">This blog has ${likes} likes.</p>
`;

const col = document.querySelector(".section .column");
col.innerHTML = htmlContent;

/* Boolean */
const booleanResult = email.includes("@");
console.log(booleanResult);

console.log(age === 30);

/* Comparisons
    == is loose comparison
    === strict comparison
*/

/* Loops */
let i = 5;

// for (i; i < 5; i++) {
// 	console.log('in for loop: ', i);
// }

// while (i < 5) {
// 	console.log('while loop number: ', i);
// 	i++;
// }

do {
  // can run the while loop just once even if not true.
  console.log("val of i is: ", i);
  i++;
} while (i < 5);

/* if statements */
const password = "p@assword";

if (password.length >= 12 && password.includes("@")) {
  console.log("This is a great password.");
} else if (password.length >= 8) {
  console.log("Password is the right length.");
} else {
  console.error("Password is too short!");
}

/* Logical operators 
    && = and, if both are true
    || = or, only one condition has to be true
    ! = not true, do if is false
    !var = switch value to true/false
*/

/* Break & continue */

const scores = [50, 25, 0, 100, 20, 40];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log("Your score is: ", scores[i]);

  if (scores[i] === 100) {
    console.log("You got to a 100!");
    break;
  }
}

/* Switch statements */

const grade = "D";
// Checks with === and same type as created var.
switch (grade) {
  case "A":
    console.log("Great stuff you got an A!");
    break;
  case "B":
    console.log("Well done you got an B.");
    break;
  case "C":
    console.log("Well done you got an C");
    break;
  case "D":
    console.log("Ah you got a D. Better luck next time.");
    break;
  case "E":
    console.log("Oh dear got a E. Better luck next time.");
    break;
  case "F":
    console.log("What happened? You failed!");
    break;
  default:
    console.error("Not a vaild grade.");
}

/* Funtions */

// Function declaration
function greet() {
  console.log("Hello");
}
greet(); // Can call above function.

// Function Expression
const speak = function () {
  console.log("Good day");
};
speak(); // Cannot call before function

// Arguments & Parameters
const speak2 = (name = "Bob", day = "morning") => {
  console.log(`good ${day} ${name}`);
};
speak2("Naruto", "night");

// Returning Values
const calc = (radius) => 3.8989 * radius ** 2;
const area = calc(5);
console.log("area is: " + area);

// Foreach Methods & Callbacks
const people = ["mark", "henry", "george", "lenny", "hugo", "jekyll", "hyde"];

const ul = document.querySelector(".testlist");
let html = ``;

people.forEach((person) => {
  html += `<li class="testlist__item">${person.toLowerCase()}</li>`;
});
ul.innerHTML = html;

/* Objects */

let user = {
  name: "Mat",
  age: 30,
  email: "mathew.teageu@outlook.com",
  location: "Birmingham",
  blogs: [
    {
      title: "Hello",
      likes: 20,
    },
    {
      title: "World",
      likes: 40,
    },
  ],
  login: () => console.log("user logged in!"),
  logout: () => console.log("user logged out!"),
  logBlogs() {
    // Method instead of object.
    // if set the => the 'this' will be set to the global function not within the user object.
    this.blogs.forEach((blog) =>
      console.log(
        `Blog title is: ${blog.title}. Number of likes are: ${blog.likes}`
      )
    ); // this referes to the user object - user. e.g. this user.
  },
};

console.log(user);
console.log(user.name);
console.log(user["email"]);

user["name"] = "Bob";
console.log(user["name"]);

const key = "location";
console.log(user[key]);

console.log(typeof user);

user.login();

user.logBlogs();

const number = 7.4;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));

const random = Math.random();
console.log(Math.round(random * 100));

/* Define default vars */
const body = document.getElementsByTagName("body")[0];
const url = document.URL;
console.info(body);
console.info(url);

/* Dom Manipulation */
const para = document.querySelector(".content__bottom p"); // Selects only one p tag item.
const paras = document.querySelectorAll(".content__bottom p"); // Selects all p tag items. Isn't an array but can do things like an array.

console.log(para);
console.log(paras[1]);

paras.forEach((para) => console.log(para));

const contents = document.getElementsByClassName("content"); // Creates a HTML collection. // This is not the same as a node list such as querySelectorAll. Can't do forEach loops with collections.

const link = document.querySelector(".content__bottom a");
console.log(`Current link href: ${link.getAttribute("href")}`);
link.setAttribute("href", "https://yewtreeweb.co.uk");
link.innerText = "YewTreeWeb";
console.log(`New link href: ${link.getAttribute("href")}`);
link.setAttribute("style", "color: orange;");

// Get style property
console.log(para.style.color); // Get's the color of the element.
para.style.fontSize = "20px"; // Add style instead of setAttribute('style', 'color: orange;');
para.style.color = ""; // Removes style.

const siteTitle = document.querySelector("h1");
console.log(siteTitle.classList);
siteTitle.classList.add("title--lg");
// siteTitle.classList.remove('title--lg');

/* Grabs all p tags and checks if they have the words success or error and then apply the correct class to them. */
const paraTags = document.querySelectorAll(".content__middle p");
paraTags.forEach((paraTag) => {
  try {
    // If use innerText all visible text within element is got. So no text within a sub element.
    // To get all text use textContent.
    const errorTag = paraTag.textContent.includes("error");
    const successTag = paraTag.textContent.includes("success");
    if (errorTag) {
      paraTag.classList.add("error");
    }
    if (successTag) {
      paraTag.classList.add("success");
    }
  } catch (e) {
    console.error(e);
    console.info(paraTag);
  }
});

// Manipluate children.
const article = document.querySelector("article");
console.log(article.children);

// Array.from turns collection into an array.
Array.from(article.children).forEach((child) =>
  child.classList.add("article-element")
);

// Get parent
const articleTitle = document.querySelector("article h2");
console.log(articleTitle.parentElement);

// Get siblings
console.log(articleTitle.nextElementSibling);
console.log(articleTitle.previousElementSibling);

/* Basic Events */

const list = document.querySelector(".todoList");
const listItems = document.querySelectorAll(".todoList li");

const button = document.querySelector("button.is-info");
const buttonRemove = document.querySelector("button.is-danger");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  console.log("You clicked me.");
  button.classList.toggle("is-light");
  li.textContent = "something new";
  list.append(li);
});

buttonRemove.addEventListener("click", () => {
  console.log("You removed an item.");
  console.log(list.children);
  Array.from(list.children).forEach((child) => {
    if (child.style.textDecoration.includes("line-through")) {
      child.remove();
    }
  });
});

// listItems.forEach((item) => {
// 	item.addEventListener('click', (el) => {
// 		console.log(el.target);
// 		el.stopPropagation(); // Stops the even bubbling up to the parent.
// 		if (item.style.textDecoration.includes('line-through')) {
// 			el.target.style.textDecoration = '';
// 		} else {
// 			el.target.style.textDecoration = 'line-through';
// 		}
// 	});
// });

list.addEventListener("click", (e) => {
  // Event delegation. Stops events being assigned to each element and will work with newly generated ones.
  console.log(e.target);
  e.stopPropagation(); // Stops the even bubbling up to the parent.
  if (e.target.tagName === "LI") {
    if (e.target.style.textDecoration.includes("line-through")) {
      e.target.style.textDecoration = "";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  }
});

// Copy event
const copy = document.querySelector(".content__bottom h3");

copy.addEventListener("copy", () => {
  console.log("copied!");
});

// Mouse move
const move = document.querySelector(".hero-body");
const pos = document.createElement("p");
pos.textContent = "";
move.append(pos);
move.addEventListener("mousemove", (e) => {
  // console.log(e.offsetX, e.offsetY);
  pos.textContent = `X Pos - ${e.offsetX} Y Pos - ${e.offsetY}`;
});

// Wheel
const wheel = document.createElement("p");
wheel.textContent = "";
move.append(wheel);
document.addEventListener("wheel", (e) => {
  wheel.textContent = `Page X - ${e.pageX} Page Y - ${e.pageY}`;
});

/* Popup */
const pop = document.querySelector(".pop");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

pop.addEventListener("click", () => (popup.style.display = "block"));
close.addEventListener("click", () => (popup.style.display = "none"));
popup.addEventListener("click", () => (popup.style.display = "none"));

/* Forms */
const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".signup-form .feedback");
// const username = document.querySelector('#username');
const userPattern = /^[a-zA-Z]{6,12}$/; // Checks if username doesn't have any other characters before or after and is a lengeth between 6 and 12 characters.

// test the results:
// let patternResult = userPattern.test(formUser);
// let patternResult = userName.search(pattern);
// console.info(patternResult);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(username.value);
  console.log(form.username.value); // dot notation with forms
  const formUser = form.username.value;
  const patternResult = userPattern.test(formUser);
  if (patternResult) {
    // Feedback success
    feedback.textContent = "Vaild username";
    feedback.classList.remove("error");
    feedback.classList.add("success");
  } else {
    // Feedback fail
    feedback.textContent = "Invalid username";
    feedback.classList.remove("success");
    feedback.classList.add("error");
  }
});

// Live Feedback form
form.username.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  const userValue = userPattern.test(e.target.value);
  if (userValue) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});

/* Filters */
const filterScores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = filterScores.filter((score) => score > 20);

console.log("Filter Array: " + filterScores);
console.log("Filtered Array: " + filteredScores);

// Get products
const products = [
  {
    name: "Yoshi",
    sale: true,
    price: 20,
  },
  {
    name: "Mario",
    sale: false,
    price: 40,
  },
  {
    name: "Luigi",
    sale: false,
    price: 56,
  },
  {
    name: "Lee",
    sale: true,
    price: 35,
  },
];

const productSales = products.filter((product) => product.sale);
console.log(productSales);

// Map cycles through an array and creates a new array
const prices = [20, 10, 5, 15, 25, 30, 66, 89];
const salePrices = prices.map((price) => price / 2);
console.log(salePrices);

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return {
      name: product.name,
      price: product.price / 2,
      forSale: product.sale,
    };
  } else {
    return product;
  }
});
console.log(saleProducts);

// reduce the array and returns a number based on the original array
// acc = accumilator
// curr = current
const highPrices = prices.reduce((acc, curr) => {
  if (curr > 20) {
    acc++;
  }
  return acc;
}, 0);
console.log(highPrices);

const playerScores = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 44 },
  { player: "yoshi", score: 58 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 98 },
  { player: "crystal", score: 76 },
  { player: "mario", score: 23 },
];

const totalScores = playerScores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);
console.log(`Mario's total score: ${totalScores}`);

// itterates an item and will return the first value then stops
const firstHighScore = playerScores.find((score) => {
  return score.score > 60;
});
console.log(firstHighScore);

// Sort by property
const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

names.sort();
console.log(names);
names.reverse();
console.log(names);
names.sort();
names.reverse();
console.log(names);

playerScores.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});

// Does the same as above sort
playerScores.sort((a, b) => b.score - a.score);
prices.sort((a, b) => a - b);

console.log(playerScores);
console.log(prices);

// Chaining Array methods together
// const filtered = products.filter((product) => product.price > 20);
// const promos = filtered.map((product) => {
// 	return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);

/* Dates */
const before = new Date("February 28 2020 8:53:00");
const now = new Date();
console.log(now);
console.log(typeof now);

// years, months, day, times
console.log("Get full year: ", now.getFullYear());
console.log("Get month: ", now.getMonth());
console.log("Get day: ", now.getDay());
console.log("Get hours: ", now.getHours());
console.log("Get minutes: ", now.getMinutes());
console.log("Get seconds: ", now.getSeconds());

// timestamp
console.log("Get timestamp: ", now.getTime()); // Number of milliseconds since 12am - 1st Jan 1970
const diff = now.getTime() - before.getTime();
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log("Difference between now and before: ", diff);
console.log("Difference between now and before in mins: ", mins);
console.log("Difference between now and before in hours: ", hours);
console.log("Difference between now and before in days: ", days);

// date stringss
console.log("Get date: ", now.toDateString());
console.log("Get time: ", now.toTimeString());
console.log("Get local: ", now.toLocaleString());

// Digital Clock
const clock = document.querySelector(".clock");
const tick = () => {
  const currentTime = new Date();
  const h = currentTime.getHours();
  const m = currentTime.getMinutes();
  const s = currentTime.getSeconds();

  const clockHtml = `
		<span>${h}</span> :
		<span>${m}</span> :
		<span>${s}</span>
	`;

  clock.innerHTML = clockHtml;
};

setInterval(tick, 1000);

// Date formatting
console.log(isToday(now));
console.log(format(now, "dd, Do, MMMM, yyyy"));

/* Async JS */

// HTTP Requests
/*
const remoteTodos = (resource, cb) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      cb(undefined, data);
    } else if (request.readyState === 4) {
      cb("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};
*/
const remoteTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

remoteTodos("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => {
    console.log("promise resolved: ", data);
  })
  .catch((err) => {
    console.error("promise rejected: ", err);
  });

// Chaining promises
/*
remoteTodos("data/luigi.json")
  .then(data => {
    console.log("promise resolved: ", data);
    return remoteTodos("data/maria.json")
      .then(data => {
        console.log("promise resolved: ", data);
      })
      .catch(err => {
        console.error("promise rejected: ", err);
      });
  })
  .catch(err => {
    console.error("promise rejected: ", err);
  });
  */

// Promises
// Stops need for nested callbacks a.k.a callback hell.
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something.
    resolve("some data");
    // reject something
    reject("some error");
  });
};

// getSomething().then(
//   data => {
//     console.log(data);
//   },
//   err => {
//     console.error(err);
//   }
// );

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

/* Fetch API */
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("rejected", err);
  });

/* Async & Await */

const asyncTodos = async () => {
  // Makes this function a promise.
  // await - waits for the JS to resolve.
  console.log(data);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

  if (data.status !== 200) {
    throw new Error("Cannot fetch the todos!");
  }

  const data = await response.json();
  return data;
};

asyncTodos()
  .then((data) => console.log("async resolved:", data))
  .catch((err) => console.error(err));

/* Local Storage */

// store data in local storage.
localStorage.setItem("name", "mario");

// deleting data from local storage.
localStorage.removeItem("name"); // deletes one item
// localStorage.clear(); // deletes all

const jobList = [
  { text: "play mariokart", author: "Mat" },
  { text: "buy milk", author: "Mario" },
  { text: "Do plumbing", author: "Luigi" },
];

localStorage.setItem("jobs", JSON.stringify(jobList));

const stored = localStorage.getItem("jobs");

console.log(JSON.parse(stored));

/* OOP */

// Create array
const namesArray = ["Mat", "Alice", "Lily"]; // Traditional way
const agesArray = new Array(30, 19, 1); // Array constructor

const userArrayOne = {}; // object literal
const userArrayTwo = new Object(); // constructor

const nameArrayTwo = new String("Josh"); // Creates a wrapper object of the string

/// Object literals
const userObjects = {
  username: "Alice",
  email: "a.teague@outlook.com",
  login() {
    console.log("User logged in");
  },
  logout() {
    console.log("User logged out");
  },
};

console.log(userObjects.username);
userObjects.login();

/* Classes */
class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  // classes automatically stores the objects in prototype.
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}.`);
    return this;
  }
}

class Admin extends User {
  // adding extra properties
  constructor(username, email, role) {
    super(username, email); // Attaches properties from User.
    this.role = role;
  }
  deleteUser(user) {
    classUsers = classUsers.filter((u) => {
      return u.username !== user.username;
    });
  }
}

/**
 * the 'new' keyword
 * 1 - it creates a new empty object {}
 * 2 - it binds the value of 'this' to the new empty object
 * 3 - it calls the constructor function to 'build' the object
 */
const userOne = new User("mario", "mario@example.com");
const userTwo = new User("luigi", "luigi@example.com");
const userThree = new Admin("Mat", "mathew.teague@yewtreeweb.co.uk", "Admin");

console.log(userOne, userTwo, userThree);
userOne.login().incScore().incScore().logout();
userTwo.login().incScore().logout();

let classUsers = [userOne, userTwo, userThree];
console.log(classUsers);

userThree.deleteUser(userTwo);
console.log(classUsers);

/* Constructors */

// original way before class
function Users(username, email) {
  this.username = username;
  this.email = email;
}

Users.prototype.login = function () {
  console.log(`${this.username} just logged in`);
  return this; // Alloe chaining
};
Users.prototype.logout = function () {
  console.log(`${this.username} just logged out`);
  return this;
};

function AdminUsers(username, email, role) {
  Users.call(this, username, email);
  this.role = role;
}

AdminUsers.prototype = Object.create(Users.prototype);
AdminUsers.prototype.deleteUsers = function () {};

const usersOne = new Users("Alice", "alice@outlook.com");
const usersTwo = new Users("Lily", "lily@outlook.com");
const usersThree = new AdminUsers("Mat", "mathew.teague@outlook.com", "Admin");

console.log(usersOne, usersTwo);
usersOne.login();

/**
 * Prototype is more efficent as it saves objects in oneplace.
 */

/* Firebase */
console.log("rescipes firestore");
const recipes = document.querySelector(".recipes");
const recipesForm = document.querySelector("#recipesForm");

const addRecipe = (recipe, id) => {
  const created = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
      <p>${recipe.title} - <span>created at: ${created}</span></p>
      <button class="button is-danger">Delete</button>
    </li>
  `;
  console.log(html);
  recipes.innerHTML += html;
};

const deleteRecipe = (id) => {
  const recipeTags = document.querySelectorAll(".recipes li");
  recipeTags.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// get documents
const unsub = db.collection("recipes").onSnapshot((snapshot) => {
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

// add documents
recipesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: recipesForm.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added!");
    })
    .catch((err) => {
      console.error(err);
    });

  recipesForm.reset();
});

// delete documents
recipes.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("button clicked");
    const id = e.target.parentElement.getAttribute("data-id");
    console.log(id);

    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted!");
      })
      .catch((err) => {
        console.error(err);
      });
  }
});

// unsub from database changes
const unsubBtn = document.querySelector("#recipesUnsub");

unsubBtn.addEventListener("click", () => {
  unsub();
  console.log("unsubscribed from changes");
});

/**
 * Spread & Rest
 */

// rest parameter
// put three dots in front of parmeters you want to become an array
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const restResult = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(restResult);

// spread syntax (arrays)
// spreads out the values of the array.
const family = ["alice", "lily", "mat"];
console.log(...family);

// good for taking values of an array and spread them out into another.
const newFamily = ["pam", "jeff", "julie", "andrew", ...family];
console.log(newFamily);

// spread syntax (objects)
const familyPerson = { name: "alice", age: 29, job: "student welfare" };
const familyClone = { ...familyPerson, location: "Birminigham" };

console.log(familyClone);

/**
 * Sets
 */

// elimate duplicates
// can't use the same commands like a nornal array
const setsArray = ["alice", "lily", "mat", "alice"];
console.log(setsArray);

const newSetArray = new Set(setsArray);
console.log(newSetArray);

// spread set into a new array
// const uniqueSetArray = [...new Set(setsArray)];
const uniqueSetArray = [...newSetArray]; // works the same as above
console.log(uniqueSetArray);

const ages = new Set();
ages.add(30);
ages.add(30).add(29);
ages.add(2);
ages.delete(2);

console.log(ages, ages.size);
console.log(ages.has(30));

ages.clear(); // remove everything in the set
console.log(ages);

const ninjas = new Set([
  { name: "alice", age: 29 },
  { name: "lily", age: 29 },
  { name: "mat", age: 29 },
]);

ninjas.forEach((ninja) => {
  console.info(ninja.name, ninja.age);
});

/**
 * Symbols
 */

// No symbols will be the same and will never be equal to each other
// Are legacy
// can be used as keys
// using symbols in an object will be unqiue

const symbolOne = Symbol("A name");
const symbolTwo = Symbol("A name");

console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo, typeof symbolTwo);

const fam = {};
fam.age = 30;
fam["name"] = "Teague";

fam[symbolOne] = "Teague";
fam[symbolTwo] = "Adam";

console.log(fam);

// console.log("testing");
