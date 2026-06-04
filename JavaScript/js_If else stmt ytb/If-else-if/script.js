// if (condition1) {
//      Code block to be executed if condition1 is true
// } else if (condition2) {
//      Code block to be executed if condition2 is true
// } else {
//      Code block to be executed if all conditions are false
// }

let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit & Fine");
} else {
    console.log("You are Underweight");
}

// Output : "You are Fit"