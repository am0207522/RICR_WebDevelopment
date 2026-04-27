// DATA_TYPES
// let — value baad mein change ho sakti hai
let naam = "Rahul";
console.log(naam); // Output: Rahul

naam = "Priya"; // ✅ Change kar sakte hain
console.log(naam); // Output: Priya

// const — ek baar set, phir change nahi
const PI = 3.14;
console.log(PI); // Output: 3.14
// PI = 5; ❌ Error aayega!

// Alag alag types store kar sakte hain
let umar = 25;        // Number
let student = true;   // Boolean (haan/nahi)
let city = "Mumbai";  // String (text)

console.log(umar);    // 25
console.log(student); // true
console.log(city);    // Mumbai



// ================================
// FUNCTIONS PRACTICE
// ================================

// 1. Normal function — purana tarika
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// 2. Arrow Function — modern aur short tarika
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20

// 3. Real example — greet karna
const greetUser = (name, city) => {
    return `Namaste ${name}! ${city} se ho?`;
};
console.log(greetUser("Meera", "Delhi")); // Output: Namaste Meera! Delhi se ho?

// 4. Default parameter — agar value na do
const discount = (price, off = 10) => price - off;
console.log(discount(100));     // 90
console.log(discount(100, 20)); // 80






// ================================
// 3. CONDITIONS
// ================================

// Basic if-else
let marks = 75;
if (marks >= 90) {
    console.log("A Grade - Excellent!");
} else if (marks >= 60) {
    console.log("B Grade - Accha hai!");
} else {
    console.log("Aur mehnat karo!");
}
// Output: B Grade - Accha hai!

// Ternary operator — short form
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// Switch — multiple options
let day = "Monday";
switch(day) {
    case "Monday":
        console.log("Somvar - Week shuru!");
        break;
    case "Friday":
        console.log("Shukravar - Weekend aane wala!");
        break;
    default:
        console.log("Ek aur din...");
}
// Output: Somvar - Week shuru!







// ================================
// ARRAYS
// ================================

let students = ["Amit", "Priya", "Rohan"];

// End mein add karo
students.push("Sunita");
console.log(students); // ["Amit","Priya","Rohan","Sunita"]

// Last item remove karo
students.pop();
console.log(students); // ["Amit","Priya","Rohan"]

// Filter — sirf matching items nikalo
let marks = [85, 42, 91, 38, 76];
let passed = marks.filter(m => m >= 50);
console.log(passed); // [85, 91, 76]

// find — pehla matching item
let topScore = marks.find(m => m > 90);
console.log(topScore); // 91

// includes — check karo hai ya nahi
console.log(students.includes("Priya")); // true

// length — kitne items hain
console.log(students.length); // 3






// ================================
// LOOPS
// ================================

// for loop — exact times pata ho tab
for (let i = 1; i <= 5; i++) {
    console.log("Student #" + i);
}
// Student #1, #2, #3, #4, #5

// while loop — jab tak condition true ho
let count = 0;
while (count < 3) {
    console.log("Counting:", count);
    count++;
}

// Array pe loop — forEach (most common!)
let cities = ["Delhi", "Mumbai", "Pune"];
cities.forEach(city => {
    console.log(`City: ${city}`);
});

// map — array transform karna
let prices = [100, 200, 300];
let withGST = prices.map(p => p * 1.18);
console.log(withGST); // [118, 236, 354]




// ================================
// CLASSES & OBJECTS
// ================================

// Class banao
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} kehta hai: ${this.sound}`);
    }
}

// Objects banao class se (new keyword)
const dog = new Animal("Tommy", "Bhow Bhow");
const cat = new Animal("Mitthu", "Meow");

dog.speak(); // Tommy kehta hai: Bhow Bhow
cat.speak(); // Mitthu kehta hai: Meow

// Inheritance — ek class doosri se seekhe (extends)
class Dog extends Animal {
    constructor(name) {
        super(name, "Bhow!"); // parent class call
        this.tricks = [];
    }

    learnTrick(trick) {
        this.tricks.push(trick);
        console.log(`${this.name} ne seekha: ${trick}`);
    }
}

const myDog = new Dog("Bruno");
myDog.speak();               // Inherited method
myDog.learnTrick("Shake");   // New method