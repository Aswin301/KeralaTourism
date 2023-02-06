var email=document.getElementById('exampleInputEmail1');
var phone=document.getElementById('phone');
var error=document.getElementById('errornameblank');
var phonemsg=document.getElementById('msg'); 
var submit=document.getElementById('submitbutton');
var password=document.getElementById('exampleInputPassword1');
var passwordmsg=document.getElementById('pwdmsg');
var strength=document.getElementById('strength');
/* email.addEventListener('keyup',validateemail);  */
/*  phone.addEventListener('keyup',validatephone); */ 
  function validateemail(){
    if(email.value.trim()==''){
        error.innerHTML='Email cannot have blanks';
        error.style.color="#FF0000";
        error.style.fontWeight='bold';
        return false;
     }else{
         error.innerHTML='';
     }
     
     if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        error.innerHTML="Email Validated";
        error.style.color="#00FF00";
        error.style.fontWeight='bold';
        return true;
     }else{
         error.innerHTML='Email is not in correct format.';
         error.style.color="#FF0000";
         error.style.fontWeight='bold';
         return false;
     }
   } 
   function validatephone(){
    if(phone.value.trim()==''){
        phonemsg.innerHTML="Phone number cannot be blank";
        phonemsg.style.color="#FF0000";
        phonemsg.style.fontWeight='bold';
        return false;
    }
    if((phone.value.match(/^[0-9]{10}$/g) || (phone.value.match(/\d{3}-\d{3}-\d{4}$/g) || phone.value.match(/\d{3}.\d{3}.\d{4}$/g) || phone.value.match(/\d{3}\s\d{3}\s\d{4}$/g)))){
        phonemsg.innerHTML="Phone number validated";
        phonemsg.style.color="#00FF00";
        phonemsg.style.fontWeight='bold';
        return false;
    }else {
        phonemsg.innerHTML="Phone Number is invalid";
        phonemsg.style.color="#FF0000"; 
        phonemsg.style.fontWeight='bold';
        return true;
    }
}
function validatepassword(){
if(password.value.trim()==''){
    passwordmsg.innerHTML="Password should not be blank";
    strength.innerHTML="";
    return false;
} if(password.value.match(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{12,16}$/g)){
    passwordmsg.innerHTML="";
    strength.innerHTML="Password Strength:High"
    strength.style.color=' #00FF00';
    strength.style.fontWeight='bold';
    return true;
}
if(!password.value.match(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,11}$/g)){
    passwordmsg.innerHTML="Password should contain minimum 8 characters and a maximum of 16 characters, at least one uppercase, and one lower case, must contain at least one number and atleast one special character"
    strength.innerHTML="Password Strength: Poor";
    strength.style.color='#FF0000';
    strength.style.fontWeight='bold';
    return false;
}
else{
    passwordmsg.innerHTML="";
    strength.innerHTML="Password Strength:Medium";
    strength.style.color='#FFA500';
    strength.style.fontWeight='bold';
    return true;
}


}

function validateform(){
    if(!validateemail() || !validatephone() || !validatepassword()){
        return false
    }
}
