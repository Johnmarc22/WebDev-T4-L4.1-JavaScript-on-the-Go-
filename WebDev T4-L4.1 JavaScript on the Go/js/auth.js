function authenticateUser() {
  const roleInput = document.getElementById("role").value.trim();
  const passwordInput = document.getElementById("password").value;

  let expectedPassword = "";
  let roleFound = true;

  // Set expected password using switch-case
  switch (roleInput.toLowerCase()) {
    case "department head":
      expectedPassword = "SiEsD3ptH34d";
      break;
    case "faculty":
      expectedPassword = "SiEsF4cu1ty";
      break;
    case "student officer":
      expectedPassword = "#CCSOAko";
      break;
    case "student":
      expectedPassword = "3SapatNa!";
      break;
    default:
      console.error("Role not recognized.");
      roleFound = false;
  }

  // Conditional validation using if...else if...else
  if (!roleFound) {
    console.warn("Authentication failed due to unrecognized role.");
  } else if (passwordInput === expectedPassword) {
    console.log(`Authentication successful for ${roleInput}.`);
  } else {
    console.error(`Incorrect password for ${roleInput}.`);
  }
}
