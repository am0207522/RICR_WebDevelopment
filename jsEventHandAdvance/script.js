document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

//   console.log("form submitted");
const fn = document.getElementById("FullName").value;
const em = document.getElementById("email").value;
const ps = document.getElementById("password").value;

const datapacket = {
    Fullname:fn,
    email:em,
    Password:ps,
}

});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault;
  confirm("Are you Sure")&&window.location.reload();

//   console.log("form reset");

//   if (confirm("Are You Sure")){
//     window.location.relod();
});







// function submit(){
//     preventDefault();

// console.log("ABCD");
// }

// function reset(){
//     window.location.relod
// }






// document.getElementById("redbox").addEventListener("mouseover", fillRedColor);
// document.getElementById("redbox").addEventListener("mouseout", fillBaseColor);

// document
//   .getElementById("greenbox")
//   .addEventListener("mouseover", fillGreenColor);

// document.getElementById("greenbox").addEventListener("mouseout", fillBaseColor);

// document.getElementById("bluebox").addEventListener("mouseover", fillBlueColor);
// document.getElementById("bluebox").addEventListener("mouseout", fillBaseColor);

// function fillRedColor() {
//   document.getElementById("bulb1").style.backgroundColor = "red";
// }

// function fillGreenColor() {
//   document.getElementById("bulb1").style.backgroundColor = "green";
// }

// function fillBlueColor() {
//   document.getElementById("bulb1").style.backgroundColor = "blue";
// }

// function fillBaseColor() {
//   document.getElementById("bulb1").style.backgroundColor = "white";
// }
