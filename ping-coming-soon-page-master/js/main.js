const d = document;

const form = d.querySelector(".form");
const errorMessage = d.querySelector(".error-message");

d.addEventListener("keyup", (e) => {

  if (e.target.matches(".form [required]")) {

    let input = e.target;
    let inputPattern = input.pattern;

    if (inputPattern && input.value !== "") {

      let regex = new RegExp(inputPattern);

      if (!regex.exec(input.value)) {
        errorMessage.classList.remove("hidden");
        input.style.border = "solid thin var(--Red-400)";
      } else {
        errorMessage.classList.add("hidden");
        input.style.border = "";
      }

    }

    if (input.value === "") {
      errorMessage.classList.add("hidden");
      input.style.border = "";
    }

  }

});

d.addEventListener("submit", (e) => {

  if (e.target === form) {

    e.preventDefault();

    alert("Thank you for the subscription\nyou will get notify :D");

    form.reset();

  }
});