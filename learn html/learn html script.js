// sidebar hiding for screen below 992px script
window.addEventListener("DOMContentLoaded", () => {
  const check = document.getElementById("check");
  const container = document.querySelector(".container");

  check.addEventListener("change", () => {
    if (window.innerWidth <= 992) {
      container.style.display = check.checked ? "block" : "none";
    }
  });

  // Width below 992px sidebar hidden
  if (window.innerWidth <= 992) {
    container.style.display = "none";
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      container.style.display = "block";
    } else {
      container.style.display = check.checked ? "block" : "none";
    }
  });
});
