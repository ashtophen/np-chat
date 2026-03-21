
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




signupBtn.addEventListener('click', function(e) {
    if (signupBtn.innerText == "Sign Up") {
        title.innerText = "Sign Up";
        emailBlock.classList.remove("hidden");
        usernameInput.type = "text";
        emailInput.type = "email";
        emailInput.required = true;
        passwordInput.type = "password";
        passwordChkInput.type = "password";
        passwordChkInput.required = true;
        passwordChkBlock.classList.remove("hidden");
        usernameLabel.innerText = "username:";
        signupBtn.innerText = "Login";
    } else {
        title.innerText = "Login";
        passwordChkBlock.classList.add("hidden");
        passwordChkInput.type = "hidden";
        passwordChkInput.required = false;
        emailBlock.classList.add("hidden");
        emailInput.type = "hidden";
        emailInput.required = false;
        usernameLabel.innerText = "username/email:";
        signupBtn.innerText = "Sign Up";

    }

});



