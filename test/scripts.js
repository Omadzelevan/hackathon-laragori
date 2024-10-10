document.addEventListener("DOMContentLoaded", function () {
    const selectExperience = document.querySelector(".selection-p1");
    const selectPlayer = document.querySelector(".selection-p");
    const yesRadio = document.getElementById("yesRadio");
    const noRadio = document.getElementById("noRadio");
    const nextButton = document.getElementById("nextButton");
    const tooltip = document.querySelector(".tooltip");
  
    let experienceSelected = false;
    let playerSelected = false;
  
    // Toggle dropdowns
    document.querySelector(".selection-p1").addEventListener("click", function () {
      const dropdown = document.getElementById("hiddiv1");
      dropdown.classList.toggle("hidden");
      toggleIcons(".icon-down", ".icon-up");
    });
  
    document.querySelector(".selection-p").addEventListener("click", function () {
      const dropdown = document.getElementById("hiddiv");
      dropdown.classList.toggle("hidden2");
      toggleIcons(".icon-down2", ".icon-up2");
    });
  
    // Handling dropdown selections
    document.querySelectorAll("#hiddiv1 li").forEach(function (li) {
      li.addEventListener("click", function () {
        const selectionText = li.textContent.trim();
        selectExperience.textContent = selectionText;
        experienceSelected = true;
        validateForm();
        document.getElementById("hiddiv1").classList.add("hidden");
        toggleIcons(".icon-down", ".icon-up", true);
      });
    });
  
    document.querySelectorAll("#hiddiv li").forEach(function (li) {
      li.addEventListener("click", function () {
        const selectionText = li.textContent.trim();
        selectPlayer.textContent = selectionText;
        playerSelected = true;
        validateForm();
        document.getElementById("hiddiv").classList.add("hidden2");
        toggleIcons(".icon-down2", ".icon-up2", true);
      });
    });
  
    // Radio buttons logic
    yesRadio.addEventListener("change", validateForm);
    noRadio.addEventListener("change", validateForm);
  
    // Enable "Next" button only when everything is selected
    function validateForm() {
      if (experienceSelected && playerSelected && (yesRadio.checked || noRadio.checked)) {
        nextButton.disabled = false;
        tooltip.style.opacity = 0; // Hide tooltip if fields are correct
      } else {
        nextButton.disabled = true;
        tooltip.style.opacity = 1; // Show tooltip if validation fails
      }
    }
  
    // Toggle icons for dropdown (down and up arrows)
    function toggleIcons(downIconSelector, upIconSelector, reset = false) {
      const iconDown = document.querySelector(downIconSelector);
      const iconUp = document.querySelector(upIconSelector);
  
      if (reset) {
        iconDown.classList.remove("hidden");
        iconUp.classList.add("hidden");
      } else {
        iconDown.classList.toggle("hidden");
        iconUp.classList.toggle("hidden");
      }
    }
  
    // Handle form submission
    nextButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form from navigating away if validation fails
  
      if (!nextButton.disabled) {
        window.location.href = "../endscreen.html"; // Redirect to the next page if validation passes
      } else {
        tooltip.style.opacity = 1; // Show tooltip if button is clicked but validation failed
      }
    });
  });
  