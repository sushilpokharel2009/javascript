function validation() {

  var strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z]).{4,8}");

  var pwdregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");


  if (myForm.name.value == "") {
    alert("Error: Username cannot be blank!");
    myForm.name.focus();
    return false;
  }

  if (strongRegex.test(myForm.name.value) == false) {
    alert(
      "Error: Username must contain lowercase, at least one uppercase, at least one number, one special character!"
    );
    myForm.name.focus();
    return false;
  }

  if (pwdregex.test(myForm.pwd.value) == false) {
    alert(
      "password not matched"
    );
    myForm.pwd.focus();
    return false;
  }
  if (
    myForm.pwd.value != myForm.cpwd.value
  ) {
    alert("The password you have entered did not match!");
    myForm.cpwd.focus();
    return false;
  }
  alert("Successfull");
  return true;
}

