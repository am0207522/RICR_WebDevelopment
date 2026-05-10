// Aaj ki date auto-fill karo CurrentDate mein
const today = new Date();
const pad = n => String(n).padStart(2, "0");
const todayValue = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
document.getElementById("CurrentDate").value = todayValue;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const curDate = document.getElementById("CurrentDate").value;

  const errorMsg = document.getElementById("errorMsg");
  const resultBox = document.getElementById("resultBox");
  const myAge = document.getElementById("myAge");

  // Reset
  errorMsg.classList.add("d-none");
  resultBox.classList.add("d-none");

  // Validation
  if (!dob || !curDate) {
    errorMsg.textContent = "Please fill in both dates.";
    errorMsg.classList.remove("d-none");
    return;
  }

  if (new Date(dob) > new Date(curDate)) {
    errorMsg.textContent = "Date of birth cannot be after current date.";
    errorMsg.classList.remove("d-none");
    return;
  }

  // Teacher ki logic - split karke parts nikalo
  const dobParts = dob.split("-");
  const curParts = curDate.split("-");

  const dobYear  = parseInt(dobParts[0]);
  const dobMonth = parseInt(dobParts[1]);
  const dobDay   = parseInt(dobParts[2]);

  const curYear  = parseInt(curParts[0]);
  const curMonth = parseInt(curParts[1]);
  const curDay   = parseInt(curParts[2]);

  // Age calculate karo
  let age = curYear - dobYear;

  if (curMonth < dobMonth || (curMonth === dobMonth && curDay < dobDay)) {
    age--;
  }

  // Result dikhao
  myAge.textContent = age + " years";
  resultBox.classList.remove("d-none");

  console.log("DOB:", dob);
  console.log("Current:", curDate);
  console.log("Age:", age);
});