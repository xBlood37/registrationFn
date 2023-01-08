const inputName = document.querySelector("[data-input-name]");
const btn = document.querySelector("[data-check-name]");
const h3 = document.querySelector("[data-name-title]");
const inputPassword = document.querySelector("[data-input-login]");

const loginAndPasswordChecker = () => {
  const lengthName = inputName.value;
  const lengthPasswors = inputPassword.value;

  if (lengthName.length >= 25 && lengthPasswors.length >= 6) {
    h3.textContent = "Недопустимая длинна";
  } else if (lengthName.length === 0 && lengthPasswors.length === 0) {
    h3.textContent = "Некоректные данные";
  } else {
    h3.textContent = "Готово";
  }
};

btn.addEventListener("click", loginAndPasswordChecker);
