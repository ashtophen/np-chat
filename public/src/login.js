
const loginScrn = document.getElementById('login-scrn');
const usernameInput = document.getElementById("username-field");
const passwordInput = document.getElementById("password-field");
const emailInput = document.getElementById("email-field");
const passwordChkInput = document.getElementById("password-check-field");
const passwordChkBlock = document.getElementById("password-check-block");
const emailBlock = document.getElementById("email-block");
const usernameLabel = document.getElementById("username-label");
const signupBtn = document.getElementById("signup/login-btn");
const rememberBtn = document.getElementById("remember");
const title = document.getElementById("login-signup-title");
const submitBtn = document.getElementById("submit");
const loginForm = document.getElementById('login-form');

function validatePassword() {
    if (passwordInput.value !== passwordChkInput.value && passwordChkInput.required == true) {
        passwordChkInput.setCustomValidity("Passwords do not match");
    } else {
        passwordChkInput.setCustomValidity("");
    }
}
passwordInput.onchange = validatePassword;
passwordChkInput.onkeyup = validatePassword;

/* submitBtn.addEventListener('click', function(e) {
    
}) */

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const loginFormData = new FormData(loginForm);
    const data = Object.fromEntries(loginFormData.entries());
    if(passwordChkInput.value){
        socket.emit('signup-req', data);
    } else { socket.emit('login-req', data); }
})

signupBtn.addEventListener('click', function(e) {
    if (signupBtn.innerText == "Sign Up") {
        title.innerText = "Sign Up";
        emailBlock.classList.remove("hidden");
        usernameInput.type = "text";
        emailInput.type = "email";
        emailInput.disabled = false;
        passwordInput.type = "password";
        passwordChkInput.type = "password";
        passwordChkInput.disabled = false;
        passwordChkBlock.classList.remove("hidden");
        usernameLabel.innerText = "username:";
        signupBtn.innerText = "Login";
    } else {
        title.innerText = "Login";
        passwordChkBlock.classList.add("hidden");
        passwordChkInput.type = "hidden";
        passwordChkInput.disabled = true;
        emailBlock.classList.add("hidden");
        emailInput.type = "hidden";
        emailInput.disabled = true;
        usernameLabel.innerText = "username/email:";
        signupBtn.innerText = "Sign Up";

    }

});



