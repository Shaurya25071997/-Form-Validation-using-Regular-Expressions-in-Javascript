console.log("Welcome to project4.js");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validEmail = false;
let validPhone = false;
let validUser = false;

$('#failure').hide();
$('#success').hide();

// Username validation
username.addEventListener('blur', () => {
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;

    if (regex.test(str)) {
        console.log("Your name is valid");
        username.classList.remove('is-invalid');
        validUser = true;
    } else {
        console.log("Your name is not valid");
        username.classList.add('is-invalid');
        validUser = false;
    }
});

// Email validation
email.addEventListener('blur', () => {
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,7})$/;
    let str = email.value;

    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log("Your email is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

// Phone validation
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    let regex = /^([0-9]{10})$/;
    let str = phone.value;

    if (regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

// Submit handler
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault(); // <-- FIXED by passing e

    console.log("You clicked on submit");
    console.log(validEmail, validPhone, validUser);

    if (validEmail && validUser && validPhone) {
        console.log("Phone, email & user are valid. Submitting the form");
        $('#failure').hide();
        $('#success').show();
    } else {
        console.log("One of Phone, email & user is not valid. Hence not submitting the form");
        $('#success').hide();
        $('#failure').show();
    }
});
