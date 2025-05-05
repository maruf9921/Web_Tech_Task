function validateForm() {

  alert("Form submitted successfully!");
  return true;

  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let dob = document.getElementById("dob").value;
  // let male = document.getElementById("male").checked;
  // let female = document.getElementById("female").checked;
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;





  if (!fname || !lname || !dob ||
  !phone || !email || !pass || !cpass) {
alert("Please fill in all fields.");
return false;
}

  if (fname.includes("0") || fname.includes("1") || fname.includes("2") ||
  fname.includes("3") || fname.includes("4") || fname.includes("5") ||
  fname.includes("6") || fname.includes("7") || fname.includes("8") ||
  fname.includes("9")) {
alert("First name should not contain numbers.");
return false;
}

if (lname.includes("0") || lname.includes("1") || lname.includes("2") ||
    lname.includes("3") || lname.includes("4") || lname.includes("5") ||
    lname.includes("6") || lname.includes("7") || lname.includes("8") ||
    lname.includes("9")) {
  alert("Last name should not contain numbers.");
  return false;
}

// Phone number check
if (phone.length !== 10 || isNaN(phone)) {
  alert("Phone must be 10 digits.");
  return false;
}

// Email check
if (!email.includes("@") || !email.includes(".")) {
  alert("Enter a valid email.");
  return false;
}

// Password check
if (pass !== cpass) {
  alert("Passwords do not match.");
  return false;
}

    // alert("Form submitted successfully!");
    // return true;

  return true;
}
  
  