//Retrieving HTML elements
const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

//Function to update class and message for errors
function showError(input,message){
    //Get the parent element of the input filed (.form-control)
    const formcontrol = input.parentElement;
    //Override the class - add error
    formcontrol.className='form-control error';
    //Get the small element for error message
    const small = formcontrol.querySelector("small");
    //Override the text for small element using input message
    small.innerText=message;
  }

  //Function to update class for Success
  function showSuccess(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className='form-control success';
    const small = formcontrol.querySelector("small");
    small.innerText=message;
  }


form.addEventListener("submit",function(e){
     e.preventDefault();
    // alert('username is required');
    if(username.value ===''){
      showError(username,"Username is required");
    }
    else{
        showSuccess(username,"Username is Valid");

    }


    if(email.value ===''){
        showError(email,"Email is required");
      }
      else{
          showSuccess(email,"Email is Valid");
  
      }


      if(password.value ===''){
        showError(password,"Password is required");
      }
      else{
          showSuccess(password,"Password is Valid");
  
      }


      if(password2.value ===''){
        showError(password2,"Confirm password is required");
      }
      else{
          showSuccess(password2,"Confirm password is Valid");
  
      }
});