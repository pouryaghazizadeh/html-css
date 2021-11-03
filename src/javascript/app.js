const bars = document.querySelector("#bars");

const menue = document.querySelector(".menue");
const searchBox = document.querySelector(".searchbox-container");
let barMood = false;
bars.addEventListener("click", (e) => {
  barMood = !barMood;
  barMood
    ? (bars.classList = "fal fa-bars")
    : (bars.classList = "fal fa-times");

  barMood ? (menue.style.left = "-100%") : (menue.style.left = "0%");
  barMood ? (searchBox.style.left = "-100%") : (searchBox.style.left = "0%");
});
