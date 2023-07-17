// gerer la saisie des champs les champs 
function validateForm() {
  var firstName = document.getElementById("exampleInputUsername1").value;
  var lastName = document.getElementById("exampleInputLastName1").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var terms = document.getElementById("exampleCheck1").checked;

  if (firstName === "" || lastName === "" || email === "" || password === "" || !terms) {
    alert("Veuillez remplir tous les champs.");
    return false;
  }
}


