// ============================================================
//  COURSE DATA - Simple array of objects
// ============================================================

var courses = [
  { title: "Full-Stack Web Development",    level: "Beginner",     price: "2,999" },
  { title: "JavaScript - Zero to Advanced", level: "Intermediate", price: "1,999" },
  { title: "React & Next.js Masterclass",   level: "Advanced",     price: "3,499" },
  { title: "Python for Data Science",       level: "Beginner",     price: "2,499" },
  { title: "UI/UX Design Fundamentals",     level: "Beginner",     price: "1,499" },
  { title: "Node.js & REST APIs",           level: "Intermediate", price: "2,199" }
];

// ============================================================
//  RENDER COURSE CARDS
// ============================================================

function renderCourses() {
  var grid = document.getElementById("coursesGrid");

  // agar grid page pe nahi hai toh kuch mat karo
  if (grid == null) {
    return;
  }

  // grid ko pehle khali karo
  grid.innerHTML = "";

  // har course ke liye ek card banao
  for (var i = 0; i < courses.length; i++) {

    var course = courses[i];

    // level ke hisab se badge color class set karo
    var tagClass = "";
    if (course.level == "Beginner") {
      tagClass = "tag-beginner";
    } else if (course.level == "Intermediate") {
      tagClass = "tag-intermediate";
    } else if (course.level == "Advanced") {
      tagClass = "tag-advanced";
    }

    // enroll link banao - course name URL mein dalo
    var enrollLink = "enroll.html?course=" + encodeURIComponent(course.title);

    // card ka HTML banao
    var cardHTML = '<div class="col-sm-6 col-lg-4">'
      + '<div class="course-card">'
      + '<span class="card-tag ' + tagClass + '">' + course.level + '</span>'
      + '<div class="card-title">' + course.title + '</div>'
      + '<div class="card-price">&#8377;' + course.price + ' <small>/ one-time</small></div>'
      + '<a href="' + enrollLink + '" class="btn-enroll">Enroll &rarr;</a>'
      + '</div>'
      + '</div>';

    // card ko grid mein add karo
    grid.innerHTML = grid.innerHTML + cardHTML;
  }
}

// ============================================================
//  ENROLL PAGE - Course name URL se leke fill karo
// ============================================================

function prefillCourse() {
  var courseInput = document.getElementById("eCourseName");

  // agar input field page pe nahi hai toh kuch mat karo
  if (courseInput == null) {
    return;
  }

  // URL se course ka naam nikalo
  var urlParams = new URLSearchParams(window.location.search);
  var courseName = urlParams.get("course");

  // agar course name mila toh field mein daal do
  if (courseName != null) {
    courseInput.value = decodeURIComponent(courseName);
  }
}

// ============================================================
//  CONTACT FORM VALIDATION
// ============================================================

function initContactForm() {
  var form = document.getElementById("contactForm");

  // agar form page pe nahi hai toh kuch mat karo
  if (form == null) {
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // input fields lao
    var nameInput    = document.getElementById("contactName");
    var emailInput   = document.getElementById("contactEmail");
    var messageInput = document.getElementById("contactMsg");

    // error message boxes lao
    var errName  = document.getElementById("errName");
    var errEmail = document.getElementById("errEmail");
    var errMsg   = document.getElementById("errMsg");

    // pehle sab errors reset karo
    errName.textContent  = "";
    errEmail.textContent = "";
    errMsg.textContent   = "";

    // values lao
    var nameValue    = nameInput.value.trim();
    var emailValue   = emailInput.value.trim();
    var messageValue = messageInput.value.trim();

    // validation check karo
    var isValid = true;

    if (nameValue == "") {
      errName.textContent = "Name is required.";
      isValid = false;
    }

    if (emailValue == "") {
      errEmail.textContent = "Email is required.";
      isValid = false;
    } else if (emailValue.includes("@") == false) {
      errEmail.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (messageValue == "") {
      errMsg.textContent = "Message is required.";
      isValid = false;
    } else if (messageValue.length < 10) {
      errMsg.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    // sab valid hai toh alert dikhao
    if (isValid == true) {
      alert("Thank you for contacting us, " + nameValue + "!");
      form.reset();
    }
  });
}

// ============================================================
//  ENROLL FORM VALIDATION
// ============================================================

function initEnrollForm() {
  var form = document.getElementById("enrollForm");

  // agar form page pe nahi hai toh kuch mat karo
  if (form == null) {
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // sab fields ki values lao
    var nameValue     = document.getElementById("eName").value.trim();
    var phoneValue    = document.getElementById("ePhone").value.trim();
    var emailValue    = document.getElementById("eEmail").value.trim();
    var genderValue   = document.getElementById("eGender").value.trim();
    var collegeValue  = document.getElementById("eCollege").value.trim();
    var branchValue   = document.getElementById("eBranch").value.trim();
    var semesterValue = document.getElementById("eSemester").value.trim();
    var courseValue   = document.getElementById("eCourseName").value.trim();

    // sab error boxes lao
    var eErrName     = document.getElementById("eErrName");
    var eErrPhone    = document.getElementById("eErrPhone");
    var eErrEmail    = document.getElementById("eErrEmail");
    var eErrGender   = document.getElementById("eErrGender");
    var eErrCollege  = document.getElementById("eErrCollege");
    var eErrBranch   = document.getElementById("eErrBranch");
    var eErrSemester = document.getElementById("eErrSemester");
    var eErrCourse   = document.getElementById("eErrCourse");

    // pehle sab errors reset karo
    eErrName.textContent     = "";
    eErrPhone.textContent    = "";
    eErrEmail.textContent    = "";
    eErrGender.textContent   = "";
    eErrCollege.textContent  = "";
    eErrBranch.textContent   = "";
    eErrSemester.textContent = "";
    eErrCourse.textContent   = "";

    // validation start karo
    var isValid = true;

    // Name check
    if (nameValue == "") {
      eErrName.textContent = "Name is required.";
      isValid = false;
    }

    // Phone check - sirf 10 digit hone chahiye
    if (phoneValue == "") {
      eErrPhone.textContent = "Phone number is required.";
      isValid = false;
    } else if (phoneValue.length != 10) {
      eErrPhone.textContent = "Enter a valid 10-digit phone number.";
      isValid = false;
    } else if (isNaN(phoneValue)) {
      eErrPhone.textContent = "Phone number must contain only digits.";
      isValid = false;
    }

    // Email check
    if (emailValue == "") {
      eErrEmail.textContent = "Email is required.";
      isValid = false;
    } else if (emailValue.includes("@") == false) {
      eErrEmail.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Gender check
    if (genderValue == "") {
      eErrGender.textContent = "Please select a gender.";
      isValid = false;
    }

    // College check
    if (collegeValue == "") {
      eErrCollege.textContent = "College name is required.";
      isValid = false;
    }

    // Branch check
    if (branchValue == "") {
      eErrBranch.textContent = "Branch is required.";
      isValid = false;
    }

    // Semester check
    if (semesterValue == "") {
      eErrSemester.textContent = "Please select a semester.";
      isValid = false;
    }

    // Course check
    if (courseValue == "") {
      eErrCourse.textContent = "Course name is required.";
      isValid = false;
    }

    // sab valid hai toh alert dikhao
    if (isValid == true) {
      alert("Thank you for Enrolling, " + nameValue + "!");
      form.reset();
    }
  });
}

// ============================================================
//  PAGE LOAD - sab functions call karo
// ============================================================

document.addEventListener("DOMContentLoaded", function() {
  renderCourses();
  prefillCourse();
  initContactForm();
  initEnrollForm();
});