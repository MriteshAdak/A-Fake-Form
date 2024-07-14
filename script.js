// only to check passwords

const check = document.querySelector('#confirm-password');
const password = document.querySelector('#password');
const warn = document.querySelector('#warning');
const submit = document.querySelector('button');
check.addEventListener('change', warning);

function warning {
    if (check.value !== password.value) {
        warn.textContent = 'passwords dont match';
        submit.setAttribute('disabled');
        check
    }
    else {
        warn.textContent = '';
        submit.removeAttribute('disabled');
    }
        
}