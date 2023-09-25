const uName = document.querySelector('input[name="name"]');
const uNameError = document.querySelector('input[name="name"] + p');

const password = document.querySelector('input[name="password"]');
const passwordError = document.querySelector('input[name="password"] + p');

const passwordConfirmation = document.querySelector('input[name="Confirmation"]');
const passwordConfirmationError = document.querySelector('input[name="Confirmation"] + p');

const email = document.querySelector('input[name="email"]');
const emailError = document.querySelector('input[name="email"] + p');

const radioError = document.querySelector(".protein + p");

const button = document.querySelector('button');


button.addEventListener("click", (event)=> {

    if (!uName.validity.valid) {
        showError(uName, uNameError);
        event.preventDefault();
    }

    else if (!password.validity.valid) {
        showError(password, passwordError);
        uNameError.textContent = "";
        event.preventDefault();
    }

    else if (!passwordConfirmation.validity.valid) {
        showError(passwordConfirmation, passwordConfirmationError);
        passwordError.textContent = ""
        event.preventDefault();
    }

    else if (passwordConfirmation.value !== password.value) {
        passwordConfirmationError.textContent = "Password does not match";
        event.preventDefault();
    }
    
    else if (!email.validity.valid) {
        showError(email, emailError);
        passwordConfirmation.textContent = "";
        event.preventDefault();
    }
    
    else if (document.querySelector('input[type="radio"]:checked') === null) {
        event.preventDefault();
        emailError.textContent = "";
        radioError.textContent = "You must select a protein"
    }

    else {
        radioError.textContent = "";

        alert("Form Submitted");
        const form = document.querySelector("form");
        form.reset();
    }
})

uName.addEventListener("input", ()=> {
    if (uName.validity.valid) {
        uNameError.textContent = "";
    }
    else {
        showError(uName, uNameError);
    }
    }
    )

password.addEventListener("input", ()=> {
    if (password.validity.valid) {
        passwordError.textContent = "";
    }
    else {
        showError(password, passwordError);
    }
    }
    )

passwordConfirmation.addEventListener("input", ()=> {
    if (!passwordConfirmation.validity.valid) {
        showError(passwordConfirmation, passwordConfirmationError)
    }

    else if (passwordConfirmation.value !== password.value) {
        passwordConfirmationError.textContent = "Password does not match";
    }

    else {
        passwordConfirmationError.textContent = "";

    }
    }
)


email.addEventListener("input", ()=> {
    if (email.validity.valid) {
        emailError.textContent = "";
    }
    else {
        showError(email, emailError);
    }
    })
    
function showError(input, inputError) {
    if (input.validity.valueMissing) {
        inputError.textContent = `${input.name} cannot be empty`
        return
    }

    if (input.validity.tooShort) {
        inputError.textContent = `${input.name} must be longer than or equal to ${input.minLength}`
        return;
    }

    if (input.validity.tooLong) {
        inputError.textContent = `${input.name} cannot be longer than ${input.maxLength}`
        return;
    }
//typeMismatch work only on email and url. pattern mismatch work only regex
    if (input.validity.typeMismatch) {
        inputError.textContent = `Enter Valid ${input.name}`;
        return;
    }


}