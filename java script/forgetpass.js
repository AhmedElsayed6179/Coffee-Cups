// This file is linked to the HTML page and contains the page’s JavaScript code
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm_email");
    const userInput = document.getElementById("user_name");
    const emailInput = document.getElementById("email");
    const userError = document.getElementById("userError");
    const emailError = document.getElementById("emailError");
    const submitBtn = document.querySelector(".submit");

    // Page load animation
    form.style.opacity = "0";
    form.style.transform = "translateY(-20px)";
    setTimeout(() => {
        form.style.transition = "0.6s ease";
        form.style.opacity = "1";
        form.style.transform = "translateY(0)";
    }, 200);

    // Validation on click
    submitBtn.addEventListener("click", () => {
        let valid = true;

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // If all good
        if (valid) {
            alert("✅ A verification code has been sent to your email");
            // Here you can add AJAX request to actually send the code
        }
    });
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