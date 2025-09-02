//variables and conditions
let userName = "Guest";
let userAge = 20;

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are under 18.");
}


 // Part 2: Functions

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Generate a greeting
function generateGreeting(name) {
  return `Hello, ${name}! Welcome to the project.`;
}

// Part 3: Loops


// Example 1: For loop
let numbers = "";
for (let i = 1; i <= 5; i++) {
  numbers += i + " ";
}

// Example 2: While loop
let count = 0;
let stars = "";
while (count < 5) {
  stars += "* ";
  count++;
}

//Part 4: DOM Interactions
 

// 1. Display default greeting
document.getElementById("greeting").innerText = generateGreeting(userName);

// 2. Button click to show message
document.getElementById("btnMessage").addEventListener("click", function() {
  alert("The sum of 5 and 10 is: " + addNumbers(5, 10));
});

// 3. Button click to greet user with input
document.getElementById("btnGreet").addEventListener("click", function() {
  let inputName = document.getElementById("nameInput").value;
  document.getElementById("greeting").innerText = generateGreeting(inputName);
});

// 4. Show loop results in a div
document.getElementById("loopResults").innerHTML = `
  <p>Numbers (for loop): ${numbers}</p>
  <p>Stars (while loop): ${stars}</p>
`;