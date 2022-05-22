//GET DOM ELEMENTS
const queueP = document.querySelector(".calls-queue-p");
const callsHeader = document.querySelector(".calls-header");
const rowLg = document.querySelector(".row-lg");
const helpBtn = document.querySelector(".help-btn");

//POPULATE CALL PARAGRAPH
let repeatedText = queueP.innerHTML.repeat(40);

queueP.innerHTML = repeatedText;

let callText = [
  "Call Queing",
  "Call Recording",
  "Voicemail",
  "Short Numbers",
  "Business Hours",
  "Calling Masking",
  "Fax To Email",
];
const queuePText = document.querySelectorAll(".calls-queue-p span");
const globeSvgPath = document.querySelectorAll(".globe-svg");
const globeCol = ["#007AD8", "#9A33CC", "#DC3545", "#FFC107", "#28A745"];

// FUNCTION DECLARATIONS
function colorGlobeSvg() {
  let windowWidth = document.documentElement.clientWidth || window.innerWidth;
  if (windowWidth > 992) {
    for (let i = 0; i < globeSvgPath.length; i++) {
      globeSvgPath[i].setAttribute("style", `fill:${globeCol[i % 5]}`);
      if (queuePText[i].innerText === "Call Queing") {
        queuePText[i].innerText =
          callText[Math.floor(Math.random() * callText.length)];
      }
    }
  } else {
    for (let i = 0; i < globeSvgPath.length; i++) {
      globeSvgPath[i].setAttribute("style", "fill:007AD8");
      queuePText[i].innerText = "Call Queing";
    }
  }
}

function changeClass(size, domElement, className) {
  let windowWidth = document.documentElement.clientWidth || window.innerWidth;

  if (windowWidth > size) {
    domElement.classList.add(className);
  } else {
    domElement.classList.remove(className);
  }
}

function changeText(size, domElement, text, originalText) {
  let windowWidth = document.documentElement.clientWidth || window.innerWidth;
  if (windowWidth > size) {
    domElement.innerText = text;
  } else {
    domElement.innerText = originalText;
  }
}

// ADD INFO ABOUT CLASSES AND ELEMENTS THAT YOU WANT TO CHANGE
let classesToChange = [
  { size: 650, domElement: callsHeader, class: "container" },
  { size: 992, domElement: rowLg, class: "row" },
  { size: 1440, domElement: queueP, class: "container" },
];

//CHANGE CLASSES
for (let i = 0; i < classesToChange.length; i++) {
  changeClass(
    classesToChange[i].size,
    classesToChange[i].domElement,
    classesToChange[i].class
  );

  window.addEventListener("resize", () => {
    changeClass(
      classesToChange[i].size,
      classesToChange[i].domElement,
      classesToChange[i].class
    );
  });
}

//CALL FUNCTIONS

changeText(992, helpBtn, "Contact One Of Our Specialists", "Let's get started");

colorGlobeSvg();

window.addEventListener("resize", function () {
  colorGlobeSvg();
  changeText(
    992,
    helpBtn,
    "Contact One Of Our Specialists",
    "Let's get started"
  );
});
