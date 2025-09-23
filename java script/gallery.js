// This file is linked to the HTML page and contains the page’s JavaScript code
// When the page loads, fade in the welcome section
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".welcome").style.opacity = "1";
  document.querySelector(".welcome").style.transform = "translateY(0)";
});

// Select the toggle button, all product items, extra items, and the "coming soon" text
const toggleBtn = document.getElementById("toggleBtn");
const allItems = document.querySelectorAll(".item");
const moreItems = document.querySelectorAll(".more-item");
const comingSoon = document.querySelector(".coming-soon");

let isShown = false; // Track if "more items" are currently shown

// On page load, animate the first 3 items
window.addEventListener("DOMContentLoaded", () => {
  allItems.forEach((item, index) => {
    if (index < 3) {
      setTimeout(() => {
        item.classList.add("show"); // Add show animation one by one
      }, index * 150); // Delay for each item
    }
  });
});

// Toggle button click event (Show More / Show Less)
toggleBtn.addEventListener("click", () => {
  if (!isShown) {
    // Show the extra items with animation
    moreItems.forEach((item, index) => {
      item.style.display = "block";
      setTimeout(() => {
        item.classList.add("show");
      }, index * 150);
    });

    // Show "coming soon" text with fade effect
    comingSoon.style.display = "block";
    setTimeout(() => {
      comingSoon.style.opacity = 1;
    }, 50);

    // Change button text to "Show Less"
    toggleBtn.textContent = "▲ Show Less";
    isShown = true;
  } else {
    // Hide the extra items with fade effect
    moreItems.forEach((item) => {
      item.classList.remove("show");
      setTimeout(() => {
        item.style.display = "none";
      }, 500);
    });

    // Hide "coming soon" text with fade effect
    comingSoon.style.opacity = 0;
    setTimeout(() => {
      comingSoon.style.display = "none";
    }, 500);

    // Change button text to "Show More"
    toggleBtn.textContent = "▼ Show More";
    isShown = false;
  }
});

// Select all "Buy Now" buttons
const buyButtons = document.querySelectorAll(".buy-btn");

// Add click event to show alert when user tries to buy
buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("You need to login first before buying!⚠️");
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
