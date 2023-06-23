window.onload = (event) => {
  document.getElementById("content_2").style.display = "block";
  document.getElementById("billing_history").style.display = "block";
  document.getElementById("form_continue").style.display = "none";
  document.getElementById("billing_link").classList.add("clicked");
  document.getElementById("billing_link_mobile").classList.add("clicked");
};

let content_1 = document.getElementById("content_1");
let content_2 = document.getElementById("content_2");
let billing_history = document.getElementById("billing_history");
let profile_form = document.getElementById("form_continue");
let profile = document.getElementById("profile_link");
let billing = document.getElementById("billing_link");
let profile_mobile = document.getElementById("profile_link_mobile");
let billing_mobile = document.getElementById("billing_link_mobile");


function toggleContent_1() {
  if (content_1.style.display = "none" && content_2.style.display == "block") {
    content_1.style.display = "block";
    content_2.style.display = "none";
    billing_history.style.display = "none";
    profile_form.style.display = "block";
    document.getElementById('dashboard').classList.remove("pb-5");
  } else if (content_1.style.display = "none" && billing_history.style.display == "block") {
    content_1.style.display = "block";
    content_2.style.display = "none";
    billing_history.style.display = "none";
    profile_form.style.display = "block";
  }

  if (billing.classList.contains("clicked") && billing_mobile.classList.contains("clicked")) {
    billing.classList.remove("clicked");
    billing_mobile.classList.remove("clicked");
    profile.classList.add("clicked");
    profile_mobile.classList.add("clicked");
  }
}

function toggleContent_2() {
  if (content_2.style.display == "block" && billing_history.style.display == "block") {
    content_2.style.display = "block";
    billing_history.style.display = "block";
    content_1.style.display = "none";
    profile_form.style.display = "none";
    document.getElementById('dashboard').classList.add("pb-5");
  } else if (content_1.style.display == "block" && billing_history.style.display == "none") {
    content_1.style.display = "none";
    profile_form.style.display = "none";
    content_2.style.display = "block";
    billing_history.style.display = "block";
    document.getElementById('dashboard').classList.add("pb-5");
  }
  if (profile.classList.contains("clicked") && profile_mobile.classList.contains("clicked")) {
    billing.classList.add("clicked");
    billing_mobile.classList.add("clicked");
    profile.classList.remove("clicked");
    profile_mobile.classList.remove("clicked");
  }
}