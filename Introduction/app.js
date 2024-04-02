let age = 26;
let userName = "Yanny";
let hobbies = ["Sport", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 10000000,
};

let adultYears;

function calculateAdultAge(userAge) {
  return userAge - 18;
}

adultYears = calculateAdultAge(age);
console.log(adultYears);

let person = {
  name: 'Max', //Property
  greet() { //Method
    console.log('Hello')
  }
};

person.greet();