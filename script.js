const input = document.querySelector(".main-content__form-input");
const button = document.querySelector(".main-content__form-button");
const errorText = document.querySelector(".main-content__error-text");
const success = document.querySelector(".success-card");
const closeButton = document.querySelector(".success-card__button");
const emailText = document.querySelector(".success-card__desc_bold");
const formContainer = document.querySelector(".main-content__form-container");
const check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
  if (input.value == "") {
    errorText.classList.add("active");
    input.classList.add("error");
    errorText.innerText = "Email is required";
  } else if (!check.test(input.value)) {
    errorText.classList.add("active");
    input.classList.add("error");
    errorText.innerText = "Valid email required";
  } else if (check.test(input.value)) {
    errorText.classList.remove("active");
    input.classList.remove("error");
    success.classList.add("active");
    emailText.innerText = input.value;
  }
});

closeButton.onclick = () => {
  success.style.animation = "disappear 0.5s";

  setTimeout(() => {
    success.classList.remove("active");
    success.style.animation = "appear 0.5s";
  }, 500);
  input.value = "";
};
