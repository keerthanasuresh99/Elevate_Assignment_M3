function validateName() {
    let name = document.getElementById('name').value;
    let error = document.getElementById('name-error');

    if (name.trim() == '') {
        error.innerHTML = 'Name cannot be blank';
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateUsername() {
    let username= document.getElementById('username').value;
    let error = document.getElementById('username-error');

    if (username.trim() == '') {
        error.innerHTML = 'Username cannot be blank';
        return false;
    } else if (username.length < 4) {
        error.innerHTML = 'Username should contain more than four characters';
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}


function validateEmail() {
    let email = document.getElementById('email').value;
    let error = document.getElementById('email-error');

    if (email.trim() == '') {
        error.innerHTML = 'Email cannot be blank';
        return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        error.innerHTML = 'Enter a valid email';
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}


function validatePassword() {
    let password = document.getElementById('password').value;
    let error = document.getElementById('password-error');

    if (password.trim() == '') {
        error.innerHTML = 'Password cannot be blank';
        return false;
    } else if (password.length < 6 || password.length > 20) {
        error.innerHTML = 'Password should be greater than six characters';
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}



function validateRepeatpassword() {
    let password = document.getElementById('password').value;
    let repeat_password = document.getElementById('repeat_password').value;

    let error = document.getElementById('repeat-password-error');

    if (repeat_password.trim() == '') {
        error.innerHTML = 'Enter your password again';
        return false;
    } else if (password != repeat_password) {
        error.innerHTML = "Password doesn't match";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validateForm(){
    let error = document.getElementById('submit-error');

    if(!validateName() || !validateEmail() || !validateUsername() || !validatePassword() || !validateRepeatpassword()){
        error.innerHTML = "Please resolve the errors";
        return false;
    }else{
        error.innerHTML = "";
        return true;
    }
}