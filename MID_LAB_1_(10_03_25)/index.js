function validateForm() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;

  // Name validation
  if (fname === "") {
      alert("First name is required.");
      return false;
  }

  if (lname === "") {
      alert("Last name is required.");
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
