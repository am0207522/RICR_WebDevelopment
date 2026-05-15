const patterns = {
  name: /^[A-Za-z\s]+$/,
  email: /^[A-Za-z\d]+@gmail\.com$/,
  phone: /^[6-9]\d{9}$/,
  pin: /^\d{6}$/,
};

const fields = [
  {
    id: "fullName",
    errorId: "fullNameError",
    pattern: patterns.name,
    message: "Enter valid full name",
  },
  {
    id: "email",
    errorId: "emailError",
    pattern: patterns.email,
    message: "Enter valid gmail",
  },
  {
    id: "phone",
    errorId: "phoneError",
    pattern: patterns.phone,
    message: "Enter valid mobile number",
  },
  {
    id: "dob",
    errorId: "dobError",
    message: "Select date of birth",
    checkEmpty: true,
  },
  {
    id: "qualification",
    errorId: "qualificationError",
    message: "Select qualification",
    checkEmpty: true,
  },
  {
    id: "marks",
    errorId: "marksError",
    message: "Enter marks",
    checkEmpty: true,
  },

  {
    id: "course",
    errorId: "courseError",
    message: "Select course",
    checkEmpty: true,
  },

  {
    id: "address",
    errorId: "addressError",
    message: "Enter address",
    checkEmpty: true,
  },

  {
    id: "city",
    errorId: "cityError",
    pattern: patterns.name,
    message: "Enter valid city",
  },

  {
    id: "pin",
    errorId: "pinError",
    pattern: patterns.pin,
    message: "Enter valid pin code",
  },

  {
    id: "guardianName",
    errorId: "guardianError",
    pattern: patterns.name,
    message: "Enter valid guardian name",
  },

  {
    id: "guardianNumber",
    errorId: "guardianNumberError",
    pattern: patterns.phone,
    message: "Enter valid guardian number",
  },
];

const validateField = (field, value) => {
  if (field.checkEmpty && !value) return field.message;
  if (field.pattern && !field.pattern.test(value)) return field.message;
  return "";
};

const updateError = (id, msg) => (document.getElementById(id).innerText = msg);

// for the  Real-time validation
fields.forEach((f) => {
  const el = document.getElementById(f.id);
  el.addEventListener("input", () =>
    updateError(f.errorId, validateField(f, el.value.trim())),
  );
});

// Timings validationn
const validateTimings = () => {
  const checked = document.querySelectorAll(
    "input[name='timings']:checked",
  ).length;
  updateError("timingsError", checked ? "" : "Select at least one timing");
};

//  Attach time listener
document
  .querySelectorAll("input[name='timings']")
  .forEach((cb) => cb.addEventListener("change", vailidateTimings));

// Forms submission
document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  fields.forEach((f) => {
    const error = validateField(f, document.getElementById(f.id).value.trim());
    updateError(f.errorId, error);
    if (error) isValid = false;
  });

  validateTimings();
  if (document.getElementById("timingsError").innerText) isValid = false;

  if (isValid) alert("Form Submitted Successsfully");
});
