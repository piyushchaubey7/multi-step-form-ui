const panels = document.querySelectorAll(".step-panel");
const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

function showStep(index) {
  panels.forEach((panel, i) => {
    panel.classList.toggle("active", i === index);
    steps[i].classList.toggle("active", i === index);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < panels.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

document.getElementById("multiStepForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});
