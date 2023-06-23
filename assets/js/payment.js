// selecting the div for the payments divs
let paymentYearly = document.getElementById("yearly_breakdown");
let paymentMonthly = document.getElementById("monthly_breakdown");

// changing the background color for the payment when clicked
let div1 = document.getElementById("year");
let div2 = document.getElementById("month");

div1.addEventListener("click", function () {
  div1.classList.replace("yearly_payment", "yearly_payment");
  div1.classList.replace("monthly_payment", "yearly_payment");
  div2.classList.replace("yearly_payment", "monthly_payment");
  paymentYearly.style.display = "block";
  paymentMonthly.style.display = "none";
});

div2.addEventListener("click", function () {
  div1.classList.replace("yearly_payment", "monthly_payment");
  div2.classList.replace("monthly_payment", "yearly_payment");
  paymentMonthly.style.display = "block";
  paymentYearly.style.display = "none";
});