const d = document;
const shareSocials = d.querySelector(".share-container");
const shareBtn = d.querySelector(".share-btn-3");

d.addEventListener("click", (e) => {
  if (e.target.matches(".share-btn-1") || e.target.matches(".share-btn-1 *")) {
    shareSocials.classList.toggle("hidden");
    shareBtn.classList.add("active-btn");

    // shareSocials.classList.remove("hidden");
    // shareSocials.classList.add("move-right-left");
    // shareSocials.classList.remove("move-left-right");
  }

  if (e.target.matches(".share-btn-2") || e.target.matches(".share-btn-2 *")) {
    shareSocials.classList.toggle("hidden");
    shareBtn.classList.remove("active-btn");

    // shareSocials.classList.remove("move-right-left");
    // shareSocials.classList.add("move-left-right");
  }

  if (e.target.matches(".share-btn-3") || e.target.matches(".share-btn-3 *")) {
    shareSocials.classList.toggle("hidden");
    shareBtn.classList.toggle("active-btn");
  }

});
