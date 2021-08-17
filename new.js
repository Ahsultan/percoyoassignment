function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputtxt.value.match(phoneno,email))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
//alert("Valid email address!");
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}

function display()
{
var x=document.form1.email.value;
var y=document.form1.text1.value;
var z=document.form1.name.value;
alert("Email:"+x+"     "+"Phone Number :"+y+"     "+"Password:"+z);
}
