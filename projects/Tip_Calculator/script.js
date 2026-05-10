function calculateTip() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tip = parseFloat(document.getElementById("serviceRating").value);
  const persons = parseInt(document.getElementById("totalPersons").value);

  const errorMsg = document.getElementById("errorMsg");
  const resultBox = document.getElementById("resultBox");

  // Reset
  errorMsg.classList.add("d-none");
  resultBox.classList.add("d-none");

  // Validation
  if (!bill || !tip || !persons) {
    errorMsg.textContent = "Please fill in all fields.";
    errorMsg.classList.remove("d-none");
    return;
  }

  if (bill <= 0 || persons <= 0) {
    errorMsg.textContent = "Bill and persons must be greater than 0.";
    errorMsg.classList.remove("d-none");
    return;
  }

  // Calculate
  const tipAmount = (bill * tip) / 100;
  const totalWithTip = bill + tipAmount;
  const perPerson = totalWithTip / persons;

  document.getElementById("perPerson").textContent = "₹" + perPerson.toFixed(2);
  document.getElementById("totalBill").textContent = "₹" + totalWithTip.toFixed(2);
  resultBox.classList.remove("d-none");
}