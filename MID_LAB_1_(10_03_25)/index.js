  function validateForm() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;


  // Inside validateForm()
const dob = document.getElementById("dob").value;
if (dob === "") {
    alert("Please select your date of birth.");
    return false;
}

const birthDate = new Date(dob);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();

if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

if (age < 0 || isNaN(age)) {
    alert("Please enter a valid date of birth.");
    return false;
}

// Example: Enforce minimum age
if (age < 18) {
    alert("You must be at least 18 years old.");
    return false;
}


  // Name validation
  if (fname === "") {
    alert("First name is required.");
    return false;
}

if (!/^[A-Za-z]+$/.test(fname)) {
    alert("First name must contain only letters.");
    return false;
}

if (lname === "") {
    alert("Last name is required.");
    return false;
}

if (!/^[A-Za-z]+$/.test(lname)) {
    alert("Last name must contain only letters.");
    return false;
}


  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return false;
  }

  // Password validation
  if (pass === "" || cpass === "") {
      alert("Both password fields are required.");
      return false;
  }

  if (pass.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
  }

  if (pass !== cpass) {
      alert("Passwords do not match.");
      return false;
  }

  
  

  // All validations passed
  return true;
}


function toggleCheckbox(clicked) {
      if (clicked.id === "male") {
        document.getElementById("female").checked = false;
      } else {
        document.getElementById("male").checked = false;
      }
    }


    function validateGender() {
      const isMale = document.getElementById("male").checked;
      const isFemale = document.getElementById("female").checked;

      if (!isMale && !isFemale) {
        alert("Please select Male or Female.");
      } else {
        alert("Gender selected successfully!");
        // Optionally proceed with form submission here
      }
    }
