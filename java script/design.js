// This file is linked to the HTML page and contains the page’s JavaScript code
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#pass");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".first");
  form.classList.add("show");
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("user_name").value.trim();
  const password = document.getElementById("pass").value.trim();

  const usernameRegex = /^[a-zA-Z0-9._]{3,20}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,}$/;

  let valid = true;

  if (!usernameRegex.test(username)) {
    document.getElementById("userError").textContent =
      "Username must be 3-20 characters (letters, numbers, . or _)";
    valid = false;
  } else {
    document.getElementById("userError").textContent = "";
  }

  if (!passwordRegex.test(password)) {
    document.getElementById("passError").textContent =
      "Password must be 8+ chars with uppercase, lowercase, number & symbol";
    valid = false;
  } else {
    document.getElementById("passError").textContent = "";
  }

  if (valid) {
    alert("Form Submitted Successfully!✅");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".welcome").style.opacity = "1";
  document.querySelector(".welcome").style.transform = "translateY(0)";
});

// Toggle links visibility on click
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("hamburger");
  const links = document.querySelector(".links");

  menuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    links.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("active");
    }
  });
});

// Preloader hide after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 500);
});

