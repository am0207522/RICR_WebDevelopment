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