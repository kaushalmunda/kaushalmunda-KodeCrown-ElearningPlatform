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

//Signin form input field label animation
document.addEventListener("DOMContentLoaded", function () {
  const inputFields = document.querySelectorAll(".formInput");

  // Function to check input field state
  function checkInputState(inputField) {
    const inputContainer = inputField.parentElement;
    if (inputField.value !== "") {
      inputContainer.classList.add("active");
    } else {
      inputContainer.classList.remove("active");
    }
  }

  // Event listeners for focus and blur
  inputFields.forEach(function (inputField) {
    inputField.addEventListener("focus", function () {
      inputField.parentElement.classList.add("active");
    });

    inputField.addEventListener("blur", function () {
      checkInputState(inputField);
    });

    checkInputState(inputField);
  });
});
