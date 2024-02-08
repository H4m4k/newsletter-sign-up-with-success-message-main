const form = document.querySelector("form");
const email = document.querySelector("#mail");
const userInput = document.querySelector("#user-input");

const message = document.querySelector("#message");
const dismiss = document.querySelector("#dismiss");

dismiss.addEventListener("click", () => {
    message.classList.add('d-none');
});

form.addEventListener("submit", () => {
  event.preventDefault();
  userInput.textContent = email.value;
  message.classList.remove('d-none');
  email.value = "";
});

