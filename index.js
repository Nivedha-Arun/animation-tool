function responsiveNavbar() {
  var myTopNav = document.getElementById("myTopnav");
  var animaker = document.getElementById("animaker-logo");
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
    animaker.className += " responsive";
  } else {
    myTopNav.className = "topnav";
    animaker.className = "animaker-logo";
  }
}

function displayPopup(id) {
  let popup = document.getElementById("popupscreen");
  let license = document.getElementById("license");

  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
    license.value = id;
  } else {
    popup.style.display = "none";
  }
  return false;
}
