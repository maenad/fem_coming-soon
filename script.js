event.preventDefault();
function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false) {
    var comeback = document.getElementById("comeback");
    var text = document.createTextNode("Please provide a valid email");

    comeback.appendChild(text);
    return false;
  }

  return true;
}
