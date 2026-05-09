document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const curDate = document.getElementById("CurrentDate").value;

  const Age = curDate.split("-")

  console.log(dob);
  console.log(curDate);
});
