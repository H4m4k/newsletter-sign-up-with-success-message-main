// const form = document.querySelector("form");
const emailInput = document.querySelector("#mail_input");
const error = document.querySelector("#error");
const userAdress = document.querySelector("#user-email");
const button = document.querySelector("#submit_btn");
const veil = document.querySelector(".veil");

const message = document.querySelector("#message");
const dismiss = document.querySelector("#dismiss");

let isValid = true;

// -- function to check if email input is valid or not

function Validate() {
    isValid = emailInput.checkValidity();

    if (isValid) {
        error.classList.add("d-none");
        emailInput.classList.remove("error", "invalid");
        console.log("is valid");
        isValid = true;
        return true;
    } else {
        error.classList.remove("d-none");
        emailInput.classList.add("error", "invalid");
        console.log("is invalid");
        isValid = false;
        return false;
    }
}

// -- check while typing for invalid input

emailInput.addEventListener("input", () => {
    Validate();
});

// -- check if input field is valid to prevent submiting invalid data,
// -- show success message if form has been submitted

button.addEventListener("click", (event) => {
    event.preventDefault();
    Validate();
    if (isValid) {
        userAdress.textContent = emailInput.value;
        message.classList.remove("d-none");
        veil.classList.remove("d-none");
        console.log("form has been submited");
    }
});

// close the success message

dismiss.addEventListener("click", () => {
    message.classList.add("d-none");
    veil.classList.add("d-none");
    emailInput.classList.remove("error", "invalid");
});
