import {signInWithEmailAndPassword,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  import { auth ,} from "./auth.js";
  const loginForm = document.querySelector("#login");
  const loginEmail = document.querySelector("#loginemail");
  const loginPassword = document.querySelector("#loginpassword");
  



  loginForm.addEventListener("submit" , (event)=>{
  event.preventDefault();
signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
  console.log(user);
  window.location = "home.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Register The Account",
});
    
  });
  })
const resetbtn = document.querySelector(".forgotpassword");
resetbtn.addEventListener("click" ,()=>{
sendPasswordResetEmail(auth, prompt("Enter your email"))
  .then(() => {
Swal.fire({
  text: "Please Check Your Email To Reset Your Password",
  icon: "success"
});
console.log("email send");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage);
   
  });
})




