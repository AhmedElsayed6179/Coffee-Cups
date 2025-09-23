// This file is linked to the HTML page and contains the page’s JavaScript code
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".first");
  form.classList.add("show");
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("createForm");

  const fullName = document.getElementById("full_name");
  const username = document.getElementById("user_name");
  const email = document.getElementById("email");
  const password = document.getElementById("pass");
  const confirmPassword = document.getElementById("confpass");

  const nameError = document.getElementById("nameError");
  const userError = document.getElementById("userError");
  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passError");
  const confpassError = document.getElementById("confpassError");

  const togglePassword = document.getElementById("togglePassword");
  const toggleConfirmPassword = document.getElementById(
    "toggleConfirmPassword"
  );

  function toggleVisibility(input, toggleIcon) {
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    toggleIcon.classList.toggle("fa-eye-slash");
  }

  togglePassword.addEventListener("click", () => {
    toggleVisibility(password, togglePassword);
  });

  toggleConfirmPassword.addEventListener("click", () => {
    toggleVisibility(confirmPassword, toggleConfirmPassword);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    nameError.textContent = "";
    userError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    confpassError.textContent = "";

    if (fullName.value.trim() === "") {
      nameError.textContent = "This field is required";
      valid = false;
    }
    if (username.value.trim() === "") {
      userError.textContent = "This field is required";
      valid = false;
    }
    if (email.value.trim() === "") {
      emailError.textContent = "This field is required";
      valid = false;
    }
    if (password.value.trim() === "") {
      passError.textContent = "This field is required";
      valid = false;
    }
    if (confirmPassword.value.trim() === "") {
      confpassError.textContent = "This field is required";
      valid = false;
    }

    if (fullName.value.trim() !== "" && fullName.value.trim().length < 8) {
      nameError.textContent = "Full name must be at least 8 characters.";
      valid = false;
    }

    const usernameRegex = /^[a-zA-Z0-9._]{3,20}$/;
    if (
      username.value.trim() !== "" &&
      !usernameRegex.test(username.value.trim())
    ) {
      userError.textContent =
        "Username must be 3-20 chars (letters, numbers, . or _)";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() !== "" && !emailRegex.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,}$/;
    if (
      password.value.trim() !== "" &&
      !passwordRegex.test(password.value.trim())
    ) {
      passError.textContent =
        "Password must be 8+ chars, include upper, lower, number & symbol.";
      valid = false;
    }

    if (
      password.value.trim() !== "" &&
      confirmPassword.value.trim() !== "" &&
      password.value.trim() !== confirmPassword.value.trim()
    ) {
      confpassError.textContent = "Passwords do not match.";
      valid = false;
    }

    if (valid) {
      alert("Registration successful! ✅");
      form.reset();
    }
  });
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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".welcome").style.opacity = "1";
  document.querySelector(".welcome").style.transform = "translateY(0)";
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