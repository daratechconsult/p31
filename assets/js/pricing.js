// Onload the yearly plan is set to display none
window.onload = (e) => {
  var hide1 = document.getElementById("price_details_1.2");
  var hide2 = document.getElementById("price_details_2.2");
  hide1.classList.add("d-none");
  hide2.classList.add("d-none");
}
// for image change
var currentSrc = "assets/icons/monthly_toggle.svg"; // Set the initial image source

function changeScr() {
  // Get the image elements
  var myImg = document.getElementById("price_sub");
  // Save the current image src

  // Set the price details to variable
  var hide1_1 = document.getElementById("price_details_1.1");
  var hide1_2 = document.getElementById("price_details_1.2");
  var hide2_1 = document.getElementById("price_details_2.1");
  var hide2_2 = document.getElementById("price_details_2.2");

  // Check if the current image source is the same as the new image source
  // Also a conditional statement to make the price details change as the monthly/yearly toggle is clicked
  if (currentSrc === "assets/icons/monthly_toggle.svg") {
    currentSrc = "assets/icons/yearly_toggle.svg";
    myImg.src = currentSrc;
    hide1_1.classList.add("d-none");
    hide1_2.classList.remove("d-none")
    hide2_1.classList.add("d-none");
    hide2_2.classList.remove("d-none")
  } else {
    currentSrc = "assets/icons/monthly_toggle.svg";
    myImg.src = currentSrc;
    hide1_1.classList.remove("d-none");
    hide1_2.classList.add("d-none")
    hide2_1.classList.remove("d-none");
    hide2_2.classList.add("d-none")
  }
};
