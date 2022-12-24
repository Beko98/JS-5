// Get the modal element

var loginModal = document.getElementById("login-modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn-login")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  loginModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  loginModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};
