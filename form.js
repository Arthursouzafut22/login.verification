


const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passaword = document.getElementById('password');
const confirm = document.getElementById('confirm');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
});


function checkInputs() {
    const usernameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passawordValue = passaword.value.trim();
    const confirmValue = confirm.value.trim();


    if(usernameValue === '') {
       setError(userName,'Usuario invalido !!!')
    }else {
        setSuccess(userName)
    }
    if(emailValue === '') {
        setError(email,'Email invalido !!!')
    }
    else if(isemail(emailValue)) {
        setError(email,'Campo invalido !!!')
    }else {
        setSuccess(email)
    }
    if(passawordValue === '') {
        setError(passaword,'Senha invalido !!!')
    }else if(passawordValue.length < 4) {
        setError(passaword,'Senha pequena !!!')
    }else {
        setSuccess(passaword)
    }
    if(confirmValue === '') {
        setError(confirm,'Campo invalido !!!')
    }else if(passawordValue !== confirmValue) {
        setError(confirm,'Repita a mesma senha !!!')
    }else {
        setSuccess(confirm)
    }
}


function setError(input,msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('span');
    small.innerText = msg
    formControl.className = 'form-control error'
}


function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


function isemail() {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



