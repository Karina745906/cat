let open = document.querySelector(".login-link");
let close = document.querySelector(".modal-close");
let PopUp = document.querySelector(".modal");
let Login = PopUp.querySelector("[name=login]");
let form =  PopUp.querySelector("form");
let password =  PopUp.querySelector("[name=password]");
let storage ="";
let isStorageSuppot = true;

try{
storage = localStorage.getItem("Login");
}
catch(err){
isStorageSuppot = false;
}

open.addEventListener("click", function(evt){
evt.preventDefault();
PopUp.classList.add("modal-show");

if(storage)
{
Login.value = storage;
password.focus();
}
else{
Login.focus();

}
});

close.addEventListener("click", function(evt){
evt.preventDefault();
PopUp.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt){
if(!Login.value || !password.value){
evt.preventDefault();
PopUp.classList.remove("modal-error");
PopUp.offsetWidth =   PopUp.offsetWidth;
PopUp.classList.add("modal-error");
}

else{
if(isStorageSuppot){
localStorage.setItem("Login", Login.value);
}
}
});


window.addEventListener("keydown", function(evt){
if (evt.keyCode === 27) {
  evt.preventDefault();

  if (PopUp.classList.contains("modal-show")) {
    PopUp.classList.remove("modal-show");
  }
}
})
