document.addEventListener('DOMContentLoaded', function() {

    const signin = document.querySelector('.signin');
    const modal = document.querySelector('.modal');
    const form = document.querySelector('.getstarted');
    const close = document.querySelector('.close');
    const submit = document.querySelector('.submit');
    const username = document.querySelector('#user');
    const password = document.querySelector('#pass');

    signin.addEventListener('click', function() {
        modal.style.display = 'block';
    })

    close.addEventListener('click', function(event) {
        modal.style.display = 'none';
        event.stopPropagation();
    })

    submit.addEventListener('click', function(event) {
        username.classList.add('error');
        password.classList.add('error');
        event.stopPropagation();
    })

    username.addEventListener('focus', (event) => {
        event.target.classList.remove('error');
    })

    password.addEventListener('focus', (event) => {
        event.target.classList.remove('error');
    })

    modal.addEventListener('click', function(event) {
        if (event.target == form ||event.target == username || event.target == password) {
            pass
        } else {
            modal.style.display = 'none';
        }
    })

});