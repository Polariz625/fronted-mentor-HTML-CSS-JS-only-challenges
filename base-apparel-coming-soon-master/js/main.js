const d = document;

const form = d.getElementById("form");
const errorMessage = d.querySelector(".error-message");
const errorIcon = d.querySelector(".error-icon");

d.addEventListener("submit", (e) => {

  if (e.target === form) {

    e.preventDefault();

    alert("Thank you for your interest. \nYou will be updated on our latest news.");

    form.reset();

  }

});

d.addEventListener("keyup", (e) => {

  if (e.target.matches("#form [required]")) {

    let input = e.target;
    let inputPattern = input.pattern;

    // console.log(input);
    // console.log(inputPattern);
    // console.log(input.value);

    if (inputPattern && input.value !== "") {

      let regex = new RegExp(inputPattern);

      if (!regex.exec(input.value)) {
        errorMessage.classList.remove("hidden");
        errorIcon.classList.remove("hidden");
      } else {
        errorMessage.classList.add("hidden");
        errorIcon.classList.add("hidden");
      }

    }

    if (input.value === "") {
      errorMessage.classList.add("hidden");
      errorIcon.classList.add("hidden");
    }

  }
});