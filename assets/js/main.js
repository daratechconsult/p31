var currentImg = "assets/images/light_mode_toggle.svg"

const toggleBtn = document.getElementById("light_mode_toggle");
const body = document.querySelector("body");

// a funtion for click when it is toggled
toggleBtn.addEventListener("click", function () {
  var img = document.getElementById("light_mode_toggle");

  if (currentImg === "assets/images/light_mode_toggle.svg") {
    currentImg = "assets/images/dark_mode_toggle.svg"
    img.src = currentImg;
    body.classList.toggle("dark-mode");
  } else {
    currentImg = "assets/images/light_mode_toggle.svg";
    img.src = currentImg;
    body.classList.toggle("dark-mode");
  }
});