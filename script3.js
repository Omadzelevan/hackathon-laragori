"use strict";
fetch("https://api.accepted.ge/api/hackathon/index")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const container = document.getElementById("hiddiv");
    data.forEach(function (item) {
      const el = `
     <li class="li" id="li">
                ${item.name}
                <img
                  class="img-selected img-indiv"
                  src="https://api.accepted.ge/${item.image}"
                  alt="${item.name}-image"
                />
              </li>
    `;
      container.innerHTML += el;
    });
    document.querySelectorAll("#hiddiv li").forEach(function (li) {
      li.addEventListener("click", function () {
        selectionText = li.textContent.trim();
        var imgselected = li.querySelector(".img-selected").src;
        let selectFirst = document.querySelector(".selection-p");
        selectFirst.textContent = selectionText;

        localStorage.setItem("KnowledgeText", selectionText);
        localStorage.setItem("KnowledgeImage", imgselected);

        var imgContainer = document.createElement("img");
        imgContainer.src = imgselected;
        imgContainer.alt = selectionText;

        var existingImg = document.querySelector(".selection-p img");
        if (existingImg) {
          existingImg.src = imgselected;
        } else {
          document.querySelector(".selection-p").appendChild(imgContainer);
        }

        document.getElementById("hiddiv").classList.add("hidden2");
        document.querySelector(".icon-down2").classList.remove("hidden2");
        document.querySelector(".icon-up2").classList.add("hidden2");
        console.log("my name is levan");
      });
    });
    console.log("fetch");
  });

const selectPlace = document.querySelector(".select-place");
const levelLoacalStorage = localStorage.getItem("Knowledge");
const radioButtonsStorage = localStorage.getItem("radios");
// var selectionText = li.textContent.trim();
// var imgselected = li.querySelector(".img-selected").src;
// let selectFirst = document.querySelector(".selection-p");
// selectFirst.textContent = selectionText;
let selectionText = localStorage.getItem("KnowledgeText")
  ? localStorage.getItem("KnowledgeText")
  : "";
let imgselected = localStorage.getItem("KnowledgeImage")
  ? localStorage.getItem("KnowledgeImage")
  : "";
let selectionText1 = localStorage.getItem("KnowledgeText1")
  ? localStorage.getItem("KnowledgeText1")
  : "";

if (levelLoacalStorage) {
  document.querySelector(".selection-p").textContent = levelLoacalStorage;
}

selectPlace?.addEventListener("click", function () {
  var hiddenDiv = document.getElementById("hiddiv");
  var iconDown = document.querySelector(".icon-down2");
  var iconUp = document.querySelector(".icon-up2");

  if (hiddenDiv.classList.contains("hidden2")) {
    hiddenDiv.classList.remove("hidden2");

    iconDown.classList.add("hidden2");
    iconUp.classList.remove("hidden2");
  } else {
    hiddenDiv.classList.add("hidden2");
    iconDown.classList.remove("hidden2");
    iconUp.classList.add("hidden2");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var savedText = localStorage.getItem("KnowledgeText");
  var savedImage = localStorage.getItem("KnowledgeImage");

  if (savedText) {
    // Update the text
    document.querySelector(".selection-p").textContent = savedText;

    if (savedImage) {
      var imgContainer = document.createElement("img");
      imgContainer.src = savedImage;
      imgContainer.alt = savedText;

      var existingImg = document.querySelector(".selection-p img");
      if (existingImg) {
        existingImg.src = savedImage;
      } else {
        document.querySelector(".selection-p").appendChild(imgContainer);
      }
    }
  }
});

// document.querySelectorAll("#hiddiv li").forEach(function (li) {
//   li.addEventListener("click", function () {
//     selectionText = li.textContent.trim();
//     var imgselected = li.querySelector(".img-selected").src;
//     let selectFirst = document.querySelector(".selection-p");
//     selectFirst.textContent = selectionText;

//     localStorage.setItem("KnowledgeText", selectionText);
//     localStorage.setItem("KnowledgeImage", imgselected);

//     var imgContainer = document.createElement("img");
//     imgContainer.src = imgselected;
//     imgContainer.alt = selectionText;

//     var existingImg = document.querySelector(".selection-p img");
//     if (existingImg) {
//       existingImg.src = imgselected;
//     } else {
//       document.querySelector(".selection-p").appendChild(imgContainer);
//     }

//     document.getElementById("hiddiv").classList.add("hidden2");
//     document.querySelector(".icon-down2").classList.remove("hidden2");
//     document.querySelector(".icon-up2").classList.add("hidden2");
//     console.log("my name is levan")
//   });
// });

document.querySelector(".selection-p1")?.addEventListener("click", function () {
  var hiddenDiv = document.getElementById("hiddiv1");
  var iconDown = document.querySelector(".icon-down");
  var iconUp = document.querySelector(".icon-up");

  if (hiddenDiv.classList.contains("hidden")) {
    hiddenDiv.classList.remove("hidden");
    iconDown.classList.add("hidden");
    iconUp.classList.remove("hidden");
  } else {
    hiddenDiv.classList.add("hidden");
    iconDown.classList.remove("hidden");
    iconUp.classList.add("hidden");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var savedText = localStorage.getItem("KnowledgeText1");

  if (savedText) {
    document.querySelector(".selection-p1").textContent = savedText;
  }
});

document.querySelectorAll("#hiddiv1 li").forEach(function (li) {
  li.addEventListener("click", function () {
    var selectionText1 = li.textContent;
    let selectionP = document.querySelector(".selection-p1");
    selectionP.textContent = selectionText1;

    localStorage.setItem("KnowledgeText1", selectionText1);

    document.getElementById("hiddiv1").classList.add("hidden");
    document.querySelector(".icon-down").classList.remove("hidden");
    document.querySelector(".icon-up").classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var savedText = localStorage.getItem("KnowledgeText1");

  if (savedText) {
    document.querySelector(".selection-p1").textContent = savedText;
    document.getElementById("nextButton").disabled = false;
  }
});

document.querySelectorAll("#hiddiv1 li").forEach(function (li) {
  li.addEventListener("click", function () {
    var selectionText2 = li.textContent;
    let selectP = document.querySelector(".selection-p1");
    selectP.textContent = selectionText2;

    localStorage.setItem("KnowledgeText1", selectionText2);
    document.getElementById("nextButton").disabled = false;

    document.getElementById("hiddiv1").classList.add("hidden");
    document.querySelector(".icon-down").classList.remove("hidden");
    document.querySelector(".icon-up").classList.add("hidden");
  });
});

const inputExp = document.getElementById("input-exp");
const yesRadio = document.getElementById("yesRadio");
const noRadio = document.getElementById("noRadio");
const nextButton4 = document.getElementById("nextButton");
const tooltip = document.querySelector(".tooltip");
const tooltip1 = document.querySelector(".tooltip1");
const tooltip2 = document.querySelector(".tooltip2");
const tooltip3 = document.querySelector(".tooltip3");
let selectFirst = document.querySelector(".selection-p");
let selectionP = document.querySelector(".selection-p1");
let selectP = document.querySelector(".selection-p1");

nextButton4.addEventListener("click", function () {
  let selectFirst = document.querySelector(".selection-p");
  let selectionP = document.querySelector(".selection-p1");

  console.log(selectionText);
  console.log(imgselected);

  if (selectionP.textContent != selectionText1) {
    tooltip.style.opacity = 1;
  } else {
    tooltip.style.opacity = 0;
  }

  if (selectFirst.textContent != selectionText) {
    tooltip1.style.opacity = 1;
  } else {
    tooltip1.style.opacity = 0;
  }
  if (!yesRadio.disabled || !noRadio.disabled) {
    tooltip3.style.opacity = 1;
    // tooltip1.style.opacity = 0;
  } else {
    tooltip3.style.opacity = 0;
  }

  if (
    (selectFirst.textContent === selectionText &&
      selectionP.textContent === selectionText1 &&
      yesRadio.checked) ||
    noRadio.checked
  ) {
    console.log("no error");
    tooltip1.style.opacity = 0;
    tooltip.style.opacity = 0;
    tooltip3.style.opacity = 0;
    window.location.href = "endscreen.html";
  }
});
