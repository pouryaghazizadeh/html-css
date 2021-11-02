const bars = document.querySelector("#bars");

const menue = document.querySelector(".menue");

let barMood = false;
bars.addEventListener("click", (e) => {
  barMood = !barMood;
  barMood
    ? (bars.classList = "fal fa-bars")
    : (bars.classList = "fal fa-times");

  barMood ? (menue.style.left = "-100%") : (menue.style.left = "0%");
});
