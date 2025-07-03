const d = document;

const $formBtn = d.querySelector(".rating-form");
const $ratingSummary = d.querySelector(".rate-selection");
const $thanksCard = d.querySelector(".thanks-card")

d.addEventListener("submit", (e) => {

  if (e.target === $formBtn) {

    e.preventDefault();

    alert("enviando puntuacion");

    //* obteniedo solo el <input> de tipo "radio" que este marcado (checked)
    const $checkedInput = document.querySelector('.rating-grid input[type="radio"]:checked');

    //* ahora que tenemos solo el <input> que esta marcado, le sacamos el valor de su atributo "value"
    let userRating = $checkedInput ? $checkedInput.value : null;

    // console.log($checkedInput, userRating);

    //* poner el userRating en el thanks-card
    $ratingSummary.textContent = `You selected ${userRating} out of 5`;

    //* hacer aparecer el mensaje de gracias
    $thanksCard.classList.remove("hidden");

  }

});