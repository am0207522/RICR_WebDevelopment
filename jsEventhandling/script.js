const defaults = { bg: '#ffffff', heading: '#111111', para: '#444444'};

document.getElementById('bg-color').addEventListener('input', e => {
  document.getElementById('preview-box').style.background = e.target.value;
});

document.getElementById('heading-color').addEventListener('input', e => {
  document.getElementById('prev-heading').style.color = e.target.value;
});

document.getElementById('para-color').addEventListener('input', e => {
  document.getElementById('prev-para').style.color = e.target.value;
});

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('bg-color').value = defaults.bg;
  document.getElementById('heading-color').value = defaults.heading;
  document.getElementById('para-color').value = defaults.para;

  document.getElementById('preview-box').style.background = defaults.bg;
  document.getElementById('prev-heading').style.color = defaults.heading;
  document.getElementById('prev-para').style.color = defaults.para;
});












// function Bulb1On(){
//     document.getElementById("bulb1").style.backgroundColor = "yellow";
// }

// // function Bulb1Off(){
// //     document.getElementById("bulb1").style.backgroundColor = "white";
// // }

// // function BulbRed(){
// //     document.getElementById("bulb1").style.backgroundColor = "white";
// // }

// // function BulbBlue(){
// //     document.getElementById("bulb1").style.backgroundColor = "white";
// // }

// document.getElementById("bulbRed").addEventListener("click", Bulb1RED);
// document.getElementById("bulbBlue").addEventListener("click", Bulb1BLUE);
// document.getElementById("bulbGreen").addEventListener("click", Bulb1GREEN);
// document
//   .getElementById("bulb1Color")
//   .addEventListener("change", ChangeBulbColor);

// function ChangeBulbColor() {
//   const color = document.getElementById("bulb1Color").value;
//   document.getElementById("bulb1").style.backgroundColor = c;
// }
