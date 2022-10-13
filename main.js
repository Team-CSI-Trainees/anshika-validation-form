// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  phonenumber = id("phone number"),
  password = id("password"),
  confirmpassword = id("confirm password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(phonenumber, 2, "phone number cannot be blank");
  engine(password, 4, "Password cannot be blank");
  engine(confirmpassword, 5, "confirm password cannot be blank");
});

// Adding the checking event listener

 let check = document.querySelector(".check");
 let number = document.querySelector(".phone number");
let containerh5 = document.querySelector(".container h5");

let regex = /^[\d,\s,\+,\-]{5,20}/;

check.addEventListener("click",()=>{
	if(phonenumber.value ==""){
		containerh5.innerText = "Please Enter Your Phone Number";
		containerh5.style.color = "#fff";
	}
	else if(phonenumber.value.match(regex)){
		containerh5.innerText = "Congrats! You Enter A Valid Phone Number";
		containerh5.style.color = "rgba(4,125,9,1)";
	}
	else
		{
		containerh5.innerText = "Oops! Your Phone Number Is Invalid";
		containerh5.style.color = "#da3400";
        // phonenumber.style.border = "2px solid red";
        // failureIcon[2].style.opacity = "1";
        // successIcon[].style.opacity = "0";

		}
});




// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons 
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};




