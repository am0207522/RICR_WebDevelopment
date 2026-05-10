document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const unit = document.getElementById("billUnit").value;

  let subtotal = 0;

  if (unit > 450) {
    subtotal += 50 * 0.5;
    subtotal += 150 * 0.75;
    subtotal += 250 * 1.2;

    let remaining = unit - 450;
    subtotal += remaining * 1.5;
  } else if (unit > 200) {
    subtotal += 50 * 0.5;
    subtotal += 150 * 0.75;

    let remaining = unit - 200;
    subtotal += remaining * 1.2;
  } else if (unit > 50) {
    subtotal += 50 * 0.5;

    let remaining = unit - 50;
    subtotal += remaining * 0.75;
  } else {
    subtotal += unit * 0.5;
  }

  let surcharge = subtotal * 0.2;

  let finalTotal = subtotal + surcharge;

  document.getElementById("billUnit").value="";
  document.getElementById("unit").innerText=unit +" U";
   document.getElementById("subtotal").innerText=subtotal +" ₹";
   document.getElementById("SurchargeAmount").innerText=surcharge+" ₹";
   document.getElementById("totalBill").innerText=finalTotal +" ₹";
  
});
document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();
  window.location.reload();
});
