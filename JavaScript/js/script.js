let fd = [
  ["RajVardhan", "18-11-1997", 7340862969, "Bhopal", "Teacher"],
  ["PranayDas", "18-11-1997", 7340862969, "Bhopal", "Teacher"],
  ["MohitPayasi", "18-11-1997", 7380862969, "Bhopal", "Teacher"],
  ["ArunavKishor", "18-11-1997", 7340862969, "Bhopal", "Teacher"]
];

fd.forEach((element) => {
  console.log(element);
});

// correct arrow function
fd.map((element, idx) => {
  console.log(idx);           // index
  console.log(element[2]);    // phone (index 2)
});



// let FData = [
//   {
//     name: "Aman Verma",
//     dob: "05-03-1995",
//     phone: 9812345678,
//     city: "Delhi",
//     profession: "Engineer"
//   },
//   {
//     name: "Sneha Kulkarni",
//     dob: "12-07-1998",
//     phone: 9123456780,
//     city: "Pune",
//     profession: "Designer"
//   },
//   {
//     name: "Rohit Sharma",
//     dob: "22-01-1993",
//     phone: 9876501234,
//     city: "Mumbai",
//     profession: "Manager"
//   },
//   {
//     name: "Neha Singh",
//     dob: "30-09-1996",
//     phone: 9001122334,
//     city: "Lucknow",
//     profession: "Teacher"
//   }
// ];

// FData.forEach((item) => {
//   console.log(item);
// });

// console.log(FData);
// console.log(FData[1]["name"]);


// object.keys(obj) example
// object.values(obj) example
let aditya = {
  name: "aditya",
  dob: "21-02-20003",
  phone: 9569961209,
  city: "Bhopal",
  profession: "Student"
};

console.log(Object.keys(aditya));
console.log(Object.values(aditya));
console.log(Object.entries(aditya));



let ar = [22,43,6,74,8,91,5,23,6,32,6,9,4,7,92,45];

ar.sort((a, b) => a - b);

console.log(ar);

console.log(ar.find((val) => val === 6));
console.log(ar.findIndex((val) => val === 6));
console.log(ar.findLastIndex((val) => val === 6));




// map find filter reduce topics
let ar2 = [22, 43, 6, 74, 8, 91, 5, 100, 23, 6, 32, 6, 9, 4, 7, 92, 6, 45];

// // sort
// ar.sort((a, b) => a - b);
// console.log(ar);

// filter
console.log(ar2.filter((val) => val > 20));

// find
console.log(ar2.find((val) => val > 20));

console.log(ar2.slice(0,7));

// ..............................................
let ab = "This is Web Developement Class"
console.log(ab);
console.log(ab.split(" "));
console.log(ab.split(" "));
// output----> 
                //  This is Web Developement Class
                //  ['This', 'is', 'Web', 'Developement', 'Class']
                //  ['This', 'is', 'Web', 'Developement', 'Class']