import { useState } from "react";

function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Full Name :", fullName);
    console.log("Email :", email);
    console.log("Phone :", phone);
    console.log("DOB :", dob);
    console.log("Gender :", gender);
    console.log("Qualification :", qualification);
    console.log("Course :", course);
    console.log("Address :", address);
  };

  return (
    <div className="d-flex justify-content-center">
        <div className="border p-4 w-50 mt-5 bg-light shadow rounded">
        <h2 className="text-center mb-4">Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />

          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br />

          <label>Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male

            <input
              type="radio"
              name="gender"
              value="Female"
              className="ms-3"
              onChange={(e) => setGender(e.target.value)}
            />
            Female

            <input
              type="radio"
              name="gender"
              value="Other"
              className="ms-3"
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </div>
          <br />

          <label>Qualification</label>
          <select
            className="form-select"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          >
            <option value="">Select Qualification</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <br />

          <label>Preferred Course</label>
          <select
            className="form-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="IIT-JEE">IIT-JEE</option>
            <option value="NEET">NEET</option>
            <option value="UPSC">UPSC</option>
          </select>
          <br />

          <label>Address</label>
          <textarea
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <br />

          <button type="submit" className="btn btn-primary me-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;