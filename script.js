const generateButton = document.getElementById("generateButton")
const spellArea = document.getElementById("spellArea")
const colors = ["darkorange", "forestgreen", "darkmagenta"]
const spell = document.getElementById("spell");
const resetButton = document.getElementById("resetButton")

// button 1
generateButton.addEventListener("click", () => {
    const ingrediantsList = document.querySelectorAll("#ingrediantsList li");

    const randomIngrediant = Math.floor(Math.random() * ingrediantsList.length);
    const ingrediant = ingrediantsList[randomIngrediant].textContent;

    // color
    spellArea.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

    // countdown
    let count = 3;

    const countdown = setInterval(() => {
        spell.textContent = count;
        count--;

        if (count<0){
            clearInterval(countdown);
            spell.textContent = ingrediant;
        }
    },1000);
});


// button 2
resetButton.addEventListener("click", () => {
    spell.textContent = " "
    spellArea.style.backgroundColor = "white"
})