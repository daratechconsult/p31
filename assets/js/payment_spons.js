// changing the background color for the payment when clicked
let div1 = document.getElementById("year");
let div2 = document.getElementById("month");

let paymentYearly = document.getElementById("yearly_breakdown");
let paymentMonthly = document.getElementById("monthly_breakdown");

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

// get select element
let users = document.getElementById("users");// this gets the number of users from the select tag
let payPerYear = document.getElementById("payPerYear");
let payPerMonth = document.getElementById("payPerMonth");
let userPerYear = document.getElementById("userPerYear");
let userFullPrice = document.getElementById("userFullPrice");
let userFullPriceMonthly = document.getElementById("userFullPriceMonthly");
let userPerMonth = document.getElementById("userPerMonth");
let priceWithoutDiscount = document.getElementById("priceWithoutDiscount");
let discountedAmount = document.getElementById("discount_amount");
let total = document.getElementById("total_price");
let monthlyPrice = document.getElementById("monthly_price");
let totalMonthly = document.getElementById("total_price_monthly");

// prices for subscription
let pricePerYear = 230.04;
let pricePerMonth = 21.30;
let fullYearPrice = pricePerMonth * 12;
let discount = 25.56;

function calculateAmount(numUsers) {
  let totalAmountYear;
  let totalAmountMonth;
  let totalPricePerUser;
  let discountAmount;
  let totalPayment;


  if (numUsers >= 1 && numUsers <= 5) {
    totalAmountYear = (numUsers * pricePerYear).toFixed(2);
    totalAmountMonth = (numUsers * pricePerMonth).toFixed(2);
    totalPricePerUser = (fullYearPrice * numUsers).toFixed(2);
    discountAmount = (discount * numUsers).toFixed(2);
    totalPayment = (totalPricePerUser - discountAmount).toFixed(2);
  }
  console.log(`The total amount yearly for ${numUsers} users is $${totalAmountYear}`)
  console.log(`The total amount monthly for ${numUsers} users is $${totalAmountMonth}`)
  payPerYear.innerHTML = `$${totalAmountYear}`;
  payPerMonth.innerHTML = `$${totalAmountMonth}`;
  priceWithoutDiscount.innerHTML = `$${totalPricePerUser}`;
  discountedAmount.innerHTML = `-$${discountAmount}`;
  total.innerHTML = `$${totalPayment}`;
  monthlyPrice.innerHTML = `$${totalAmountMonth}`;
  totalMonthly.innerHTML = `$${totalAmountMonth}`;
}

users.addEventListener("change", function () {
  let numUsers = (users.value);
  calculateAmount(numUsers);
  userPerYear.innerHTML = `${numUsers}`;
  userPerMonth.innerHTML = `${numUsers}`;
  userFullPrice.innerHTML = `${numUsers}`;
  userFullPriceMonthly.innerHTML = `${numUsers}`;

})





