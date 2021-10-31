const bars = document.querySelector("#bars");



let barMood = false;
bars.addEventListener("click", (e) => {
    barMood = !barMood;
    barMood?bars.classList="fal fa-times":bars.classList="fal fa-bars"
});


// (barMood ?  : );