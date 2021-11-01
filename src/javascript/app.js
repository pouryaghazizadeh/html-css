const bars = document.querySelector("#bars");

const menue = document.querySelector(".menue");
console.log(menue);


let barMood = false;
bars.addEventListener("click", (e) => {
    barMood = !barMood;
    barMood?bars.classList="fal fa-times":bars.classList="fal fa-bars"

    barMood
      ? (menue.style.left= "-100%"):(menue.style.left = "0%"); 
});


// (barMood ?  : );