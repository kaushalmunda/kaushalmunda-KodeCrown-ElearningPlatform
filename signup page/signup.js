// password show button script
function togglePassword() {
  var passwordField = document.getElementById("password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    document.getElementById("toggleBtn").textContent = "Hide";
  } else {
    passwordField.type = "password";
    document.getElementById("toggleBtn").textContent = "Show";
  }
}
