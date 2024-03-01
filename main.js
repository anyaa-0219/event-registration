function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    var y = document.forms["myForm"]["ename"].value;
    if (y == "") {
      alert("Enrollment Number must be filled");
      return false;
    }

    var z = document.forms["myForm"]["pname"].value;
    if (z == "") {
      alert("Phone NUmber must be filled");
      return false;
    }

    var a = document.forms["myForm"]["emname"].value;
    if (a == "") {
      alert("Email must be filled out");
      return false;
    }
  }