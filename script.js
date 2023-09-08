function valideForm() {
    let estValide = true;
    const emailInput = document.getElementById("email");
    if (emailInput.value === ""){
      document.getElementById("error_message").innerHTML = "Valid Email Required";
      innerHTML.style.color = "red"
      emailInput.nextElementSibling.style.display = "flex";
      emailInput.nextElementSibling.style.color = "red";
      emailInput.style.border = "1px solid red";
      estValide = false;
    } else {
      emailInput.nextElementSibling.style.display = "none";
      emailInput.style.border = "3px solid black";
    }
  
    if (estValide) {
      const emailPlaceholder = document.getElementById("email_placeholder");
      emailPlaceholder.textContent = emailInput.value;
      emailPlaceholder.style.color = `hsl(198, 60%, 50%)`
      document.getElementById("success_message").style.display = "block";
    }
    function valideForm()
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value.match(mailformat))
    {
    alert("Valid email address!");
    document.getElementById("error_message").focus();
        return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
    }
    }
    }